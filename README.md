# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 📝 Todo TypeScript App

A modern, elegant Todo application built with **React**, **TypeScript**, and **Vite**. This project demonstrates best practices for TypeScript development, React hooks, local storage integration, and responsive design with a beautiful glass morphism UI.

![Todo App Preview](https://img.shields.io/badge/React-18.x-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Vite](https://img.shields.io/badge/Vite-5.x-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Live Demo

[**View Live Demo**](https://nirmalkoswatta.github.io/Todo-app/) - Try the app live on GitHub Pages!

## ✨ Features

- ✅ **Add new todos** with a clean, intuitive interface
- ✅ **Mark todos as complete/incomplete** with a single click
- ✅ **Delete todos** when they're no longer needed
- 🔍 **Filter todos** by status (All / Active / Completed)
- 💾 **Persistent storage** using localStorage
- 📱 **Responsive design** that works on all devices
- 🎨 **Beautiful glass morphism UI** with backdrop blur effects
- 🖼️ **Custom background support** with dark overlay for readability
- ⚡ **Fast performance** powered by Vite
- 🔒 **Type-safe** with full TypeScript support

## 🛠️ Tech Stack

- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **CSS3** - Modern styling with glass morphism effects
- **LocalStorage API** - Data persistence

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nirmalkoswatta/Todo-app.git
   cd Todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🌐 Deployment

### GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The app will be automatically deployed to: `https://nirmalkoswatta.github.io/Todo-app/`

### Manual Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click "Save"

3. **Access your deployed app**
   - Your app will be available at: `https://[username].github.io/[repository-name]/`

## 📁 Project Structure

```
todo-typescript-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── TodoForm.tsx   # Add new todo form
│   │   ├── TodoItem.tsx   # Individual todo item
│   │   ├── TodoList.tsx   # List of todos
│   │   └── TodoFilter.tsx # Filter controls
│   ├── hooks/             # Custom React hooks
│   │   └── useLocalStorage.ts # localStorage hook
│   ├── App.tsx           # Main app component
│   ├── App.css          # App styles
│   ├── index.tsx        # App entry point
│   ├── index.css        # Global styles
│   └── types.d.ts       # TypeScript type definitions
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## 🎯 Core Concepts Demonstrated

### TypeScript Integration
- **Type definitions** for props and state
- **Interface declarations** for component props
- **Generic types** for reusable hooks
- **Type-safe** event handlers and data manipulation

### React Best Practices
- **Functional components** with hooks
- **Custom hooks** for logic reuse
- **State management** with useState
- **Performance optimization** with useMemo
- **Component composition** and prop drilling

### Modern Development
- **ES6+ features** (destructuring, arrow functions, modules)
- **CSS Grid/Flexbox** for layouts
- **Responsive design** principles
- **Accessibility** considerations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features Breakdown

### Todo Management
```typescript
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
```

### Local Storage Integration
The app automatically saves your todos to browser local storage, so your data persists between sessions.

### Filtering System
- **All**: Show all todos
- **Active**: Show only incomplete todos
- **Completed**: Show only completed todos

### Responsive Design
The app works seamlessly across:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop computers (1024px+)

## 🌟 Code Highlights

### Custom LocalStorage Hook
```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  // Persistent state management with localStorage
}
```

### Type-Safe Todo Operations
```typescript
const addTodo = (text: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  };
  setTodos([...todos, newTodo]);
};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- TypeScript team for bringing types to JavaScript
- Vite team for the lightning-fast build tool
- The open-source community for inspiration

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Nirmalkoswatta/Todo-app/issues).

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Nirmal Koswatta**
- GitHub: [@Nirmalkoswatta](https://github.com/Nirmalkoswatta)

---

**Built with ❤️ using React, TypeScript & Vite**

*Happy coding! 🚀*

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
