import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    
    return <input style={{border: '3px solid blue'}} type="number" min={5} />
}

root.render(<App />);