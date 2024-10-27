# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   └── PrivateRoute.jsx
│   ├── dashboard/
│   │   ├── Dashboard.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskTrendChart.jsx
│   ├── tasks/
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskFilters.jsx
│   │   └── TaskTimeTracker.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Modal.jsx
│       ├── Loader.jsx
│       └── Notification.jsx
├── context/
│   ├── AuthContext.js
│   └── TaskContext.js
├── utils/
│   ├── api.js
│   └── helpers.js
├── App.jsx
├── index.jsx
└── App.css
