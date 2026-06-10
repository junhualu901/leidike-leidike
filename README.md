# 双向情感干预

一个现代化的情感互动平台，旨在提供双向的、有意义的人际互动体验。

## 项目介绍

**双向情感干预**（Bidirectional Emotional Intervention）是一个创新的社交应用，致力于帮助用户建立更健康、更有深度的人际关系。

### 核心特性
- 🎯 情感识别和分析
- 💬 智能对话推荐
- 📊 互动数据可视化
- 🔐 隐私保护优先
- 🌱 个性化成长建议

## 技术栈

### 前端
- **框架**: React 18+
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **状态管理**: Redux Toolkit
- **HTTP客户端**: Axios

### 后端
- **运行时**: Node.js 18+
- **框架**: Express.js
- **数据库**: MongoDB
- **认证**: JWT
- **ORM**: Mongoose

### 开发工具
- **容器化**: Docker & Docker Compose
- **包管理**: npm
- **代码规范**: ESLint + Prettier
- **版本控制**: Git

## 快速开始

### 前置条件
- Node.js 18+
- Docker & Docker Compose（可选）
- Git

### 安装步骤

#### 使用 Docker（推荐）
```bash
docker-compose up -d
```

#### 本地开发
```bash
# 1. 克隆项目
git clone https://github.com/junhualu901/leidike-leidike.git
cd leidike-leidike

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env.local

# 4. 启动开发服务器
npm run dev
```

## 项目结构

```
leidike-leidike/
├── client/                 # 前端项目
│   ├── src/
│   │   ├── components/    # React组件
│   │   ├── pages/         # 页面
│   │   ├── hooks/         # 自定义Hook
│   │   ├── store/         # Redux store
│   │   ├── api/           # API调用
│   │   └── styles/        # 样式文件
│   └── package.json
├── server/                # 后端项目
│   ├── src/
│   │   ├── routes/        # API路由
│   │   ├── models/        # 数据模型
│   │   ├── controllers/   # 控制器
│   │   ├── middleware/    # 中间件
│   │   └── utils/         # 工具函数
│   └── package.json
├── docker-compose.yml     # Docker配置
├── .gitignore
├── .env.example
└── README.md
```

## 环境变量

创建 `.env.local` 文件：

```env
# 数据库
MONGODB_URI=mongodb://localhost:27017/leidike

# 服务器
SERVER_PORT=3001
NODE_ENV=development

# 前端
REACT_APP_API_URL=http://localhost:3001/api
```

## 开发命令

```bash
# 安装所有依赖
npm run install-all

# 启动开发服务器（前端+后端）
npm run dev

# 启动前端
npm run dev:client

# 启动后端
npm run dev:server

# 构建生产版本
npm run build

# 运行测试
npm run test

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 联系方式

如有问题或建议，欢迎通过以下方式联系：
- 📧 Email: junhualu901@example.com
- 🐛 Issues: [提交Issue](https://github.com/junhualu901/leidike-leidike/issues)

---

**最后更新**: 2026-06-10