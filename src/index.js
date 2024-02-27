import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    const name = 'Husna';
    const age = 37;

    return (
        <h1>
            Hi, {name} here!, I'm {age} years old.
        </h1>
        );
}

root.render(<App />);