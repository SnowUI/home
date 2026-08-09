import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const directory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(directory, "..");
const sourcePath = path.join(root, "snowui-utilities.css");
const outputPath = path.join(root, "snowui-responsive.css");
const defaultEntryPath = path.join(root, "snowui.css");
const sizeBudget = { raw: 44_000, gzip: 5_250 };

const breakpoints = [
  ["sm", 640],
  ["md", 768],
  ["lg", 1024],
  ["xl", 1280],
  ["2xl", 1536],
];

const range = (prefix, values) => values.map((value) => `${prefix}-${value}`);
const spacing = [0, 4, 8, 12, 16, 20, 24, 28, 40, 48];
const sizes = [12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80];
const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// 第一阶段仅覆盖页面响应式编排；新增家族前必须先有真实消费证据并同步规范。
const allowlist = {
  Display: [
    "block",
    "inline-block",
    "inline",
    "flex",
    "inline-flex",
    "grid",
    "inline-grid",
    "hidden",
  ],
  Flexbox: [
    "flex-row",
    "flex-row-reverse",
    "flex-col",
    "flex-col-reverse",
    "flex-wrap",
    "flex-nowrap",
    "flex-1",
    "flex-auto",
    "flex-initial",
    "flex-none",
    "grow",
    "grow-0",
    "shrink",
    "shrink-0",
  ],
  Grid: [
    ...range("grid-cols", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    ...range("col-span", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    "col-span-full",
  ],
  Alignment: [
    "justify-start",
    "justify-end",
    "justify-center",
    "justify-between",
    "justify-around",
    "justify-evenly",
    "items-start",
    "items-end",
    "items-center",
    "items-baseline",
    "items-stretch",
    "self-auto",
    "self-start",
    "self-end",
    "self-center",
    "self-stretch",
    "self-baseline",
  ],
  Gap: range("gap", spacing),
  Padding: ["p", "px", "py"].flatMap((prefix) => range(prefix, spacing)),
  Sizing: [
    ...range("w", sizes),
    ...range("h", sizes),
    "w-full",
    "h-full",
    "w-screen",
    "h-screen",
    "w-hug",
    "h-hug",
    "w-fill",
    "h-fill",
    "min-w-0",
    "min-h-0",
    "min-w-screen",
    "min-h-screen",
    ...range("max-w", percentages.map((value) => `${value}p`)),
    ...range("max-h", percentages.map((value) => `${value}p`)),
  ],
  "Overflow / Whitespace": [
    "overflow-auto",
    "overflow-hidden",
    "overflow-visible",
    "overflow-scroll",
    "overflow-x-auto",
    "overflow-y-auto",
    "overflow-x-hidden",
    "overflow-y-hidden",
    "whitespace-pre-wrap",
    "whitespace-nowrap",
  ],
};

const source = fs.readFileSync(sourcePath, "utf8");
const declarations = new Map();
const classNames = Object.values(allowlist).flat();

if (new Set(classNames).size !== classNames.length) {
  throw new Error("响应式 allowlist 存在重复类名");
}

if (fs.readFileSync(defaultEntryPath, "utf8").includes("snowui-responsive.css")) {
  throw new Error("snowui-responsive.css 必须保持可选入口，不得导入默认 snowui.css");
}

for (const className of classNames) {
  const escapedName = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = source.match(new RegExp(`\\.${escapedName}\\s*\\{([^}]*)\\}`));
  if (!match) {
    throw new Error(`响应式 allowlist 中的 .${className} 不存在于 snowui-utilities.css`);
  }
  declarations.set(className, match[1].trim().replace(/\s+/g, " "));
}

const classCount = classNames.length;
const escapePrefix = (prefix) => prefix === "2xl" ? "\\32 xl" : prefix;

let output = `/*
  此文件由 scripts/generate-responsive-utilities.mjs 生成，请勿手工修改。
  mobile-first 标准断点：sm 640px / md 768px / lg 1024px / xl 1280px / 2xl 1536px。
  第一阶段 allowlist：${classCount} 个基类 × ${breakpoints.length} 个断点 = ${classCount * breakpoints.length} 条规则。
  体积预算：不超过 ${sizeBudget.raw} B raw / ${sizeBudget.gzip} B gzip。
*/\n`;

for (const [prefix, minWidth] of breakpoints) {
  output += `\n@media (min-width: ${minWidth}px) {\n`;
  for (const [group, classNames] of Object.entries(allowlist)) {
    output += `  /* ${group} */\n`;
    for (const className of classNames) {
      output += `  .${escapePrefix(prefix)}\\:${className} { ${declarations.get(className)} }\n`;
    }
  }
  output += `}\n`;
}

const rawBytes = Buffer.byteLength(output);
const gzipBytes = zlib.gzipSync(output, { level: 9 }).length;

if (rawBytes > sizeBudget.raw || gzipBytes > sizeBudget.gzip) {
  throw new Error(`响应式 CSS 超出体积预算：${rawBytes} B raw / ${gzipBytes} B gzip`);
}

if (process.argv.includes("--check")) {
  const current = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, "utf8") : "";
  if (current !== output) {
    console.error("snowui-responsive.css 与生成器不一致，请运行 pnpm generate:responsive。");
    process.exit(1);
  }
} else {
  fs.writeFileSync(outputPath, output);
}

console.log(`${path.basename(outputPath)}: ${classCount * breakpoints.length} rules, ${rawBytes} B raw, ${gzipBytes} B gzip`);
