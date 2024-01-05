import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/styles/main.css';

const render_target = document.getElementById('root')!;

ReactDOM.createRoot(render_target).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
