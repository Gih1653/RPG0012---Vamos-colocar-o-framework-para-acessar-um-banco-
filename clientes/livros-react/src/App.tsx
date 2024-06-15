import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Catalogo</Link>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/novo">Novo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<LivroLista />} />
                <Route path="/novo" element={<LivroDados />} />
            </Routes>
        </Router>
    );
}

export default App;