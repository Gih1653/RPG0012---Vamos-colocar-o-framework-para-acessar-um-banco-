import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    excluir(livro.codigo);
  };

  return (
    <tr>
      <td>{livro.título}</td>
      <td>{nomeEditora}</td>
      <td>
        <button className="btn btn-danger" onClick={handleExcluir}>
          Excluir
        </button>
      </td>
    </tr>
  );
}

function LivroLista() {
  const controleLivro = new ControleLivro();
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const livrosObtidos = await controleLivro.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    };
    fetchData();
  }, [carregado]);

  const excluirLivro = async (codigo) => {
    await controleLivro.excluir(codigo);
    const livrosObtidos = await controleLivro.obterLivros();
    setLivros(livrosObtidos);
    setCarregado(false);
  };

  return (
    <main className="container mt-4">
      <h1 className="mb-4">Lista de Livros</h1>
      <table className="table">
        <thead style={{ backgroundColor: 'black', color: 'white' }}>
          <tr>
            <th>Título</th>
            <th>Editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} excluir={excluirLivro} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;