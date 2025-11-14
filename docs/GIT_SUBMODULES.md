# Git 子模块管理指南

## 📋 当前情况

SnowUI 项目包含以下子目录，它们都是独立的 Git 仓库：

- `example/` - 示例网站
- `resource/core/` - 核心资源包
- `resource/react/` - React 组件包

## ⚠️ 问题说明

如果直接将整个 `snowui` 目录推送到 GitHub，这些嵌套的 Git 仓库**不会被包含**。Git 会忽略包含 `.git` 目录的子目录，除非它们被配置为 Git 子模块（Git Submodules）。

## ✅ 解决方案

### 方案 1: 使用 Git 子模块（推荐）

将子目录配置为 Git 子模块，这样可以：
- 保持子项目的独立版本控制
- 在主项目中引用特定版本
- 方便单独更新和维护

#### 步骤：

1. **初始化主仓库**（如果还没有）：
```bash
cd /Users/yuan/Project/snowui
git init
```

2. **移除子目录中的 .git 目录**（备份当前状态）：
```bash
# 先备份子目录的 Git 历史（如果需要）
# 然后移除 .git 目录
rm -rf example/.git
rm -rf resource/core/.git
rm -rf resource/react/.git
```

3. **添加子模块**（假设这些项目已经在 GitHub 上）：
```bash
# 如果子项目已经在 GitHub 上
git submodule add https://github.com/snowui/example.git example
git submodule add https://github.com/snowui/resource-core.git resource/core
git submodule add https://github.com/snowui/resource-react.git resource/react
```

4. **提交更改**：
```bash
git add .gitmodules
git commit -m "Add submodules"
```

#### 使用子模块：

```bash
# 克隆包含子模块的项目
git clone --recursive https://github.com/your-username/snowui.git

# 或者克隆后初始化子模块
git submodule update --init --recursive

# 更新子模块到最新版本
git submodule update --remote
```

### 方案 2: 合并为单一仓库

如果不需要保持子项目的独立版本控制，可以将所有内容合并到一个仓库中。

#### 步骤：

1. **移除所有子目录的 .git 目录**：
```bash
rm -rf example/.git
rm -rf resource/core/.git
rm -rf resource/react/.git
```

2. **初始化主仓库**：
```bash
cd /Users/yuan/Project/snowui
git init
git add .
git commit -m "Initial commit"
```

3. **推送到 GitHub**：
```bash
git remote add origin https://github.com/your-username/snowui.git
git push -u origin main
```

**注意**：使用此方案后，子项目将失去独立的版本控制历史。

### 方案 3: 使用 .gitignore 排除子目录

如果子项目需要保持独立，但不想使用子模块，可以在主仓库的 `.gitignore` 中排除它们：

```bash
# .gitignore
example/
resource/core/
resource/react/
```

然后只提交主项目的文件。但这样其他人在克隆仓库时不会得到这些子目录的内容。

## 🎯 推荐方案

**推荐使用方案 1（Git 子模块）**，因为：

1. ✅ 保持子项目的独立性和版本控制
2. ✅ 可以单独维护和更新每个子项目
3. ✅ 主项目可以锁定子项目的特定版本
4. ✅ 符合 monorepo 的最佳实践

## 📝 子模块管理命令

```bash
# 查看子模块状态
git submodule status

# 初始化所有子模块
git submodule init

# 更新所有子模块
git submodule update

# 更新子模块到远程最新版本
git submodule update --remote

# 克隆包含子模块的项目
git clone --recursive <repository-url>

# 在子模块中工作
cd example
git checkout main
# 进行修改...
git commit -m "Update example"
cd ..
git add example
git commit -m "Update example submodule"
```

## ⚠️ 注意事项

1. **首次克隆**：使用 `git clone --recursive` 或克隆后运行 `git submodule update --init --recursive`
2. **更新子模块**：其他开发者需要定期运行 `git submodule update` 来获取子模块的更新
3. **子模块修改**：在子模块中修改后，需要在子模块目录中提交，然后在主项目中提交子模块的引用更新

## 🔗 相关资源

- [Git Submodules 官方文档](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Git Submodules 最佳实践](https://www.atlassian.com/git/tutorials/git-submodule)

