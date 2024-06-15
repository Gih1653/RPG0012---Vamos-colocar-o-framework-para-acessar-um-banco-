import { Livro } from '../modelo/Livro';

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id?: string;
    codEditora: number;
    título: string;
    resumo: string;
    autores: string[];
}

class ControleLivro {
    
    async obterLivros(): Promise<Array<Livro>> {
        try {
            const response = await fetch(baseURL);
            const livrosMongo: Array<LivroMongo> = await response.json();
            return livrosMongo.map(livroMongo => {
                return new Livro(
                    livroMongo._id || '',
                    livroMongo.codEditora,
                    livroMongo.título,
                    livroMongo.resumo,
                    livroMongo.autores
                );
            });
        } catch (error) {
            console.error("Erro ao obter livros:", error);
            return [];
        }
    }

    async incluir(livro: Livro): Promise<boolean> {
        try {
            const livroMongo: LivroMongo = {
                codEditora: livro.codEditora,
                título: livro.título,
                resumo: livro.resumo,
                autores: livro.autores
            };
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(livroMongo)
            });
            return response.ok;
        } catch (error) {
            console.error("Erro ao incluir livro:", error);
            return false;
        }
    }

    async excluir(codigo: string): Promise<boolean> {
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch (error) {
            console.error("Erro ao excluir livro:", error);
            return false;
        }
    }
}

export default ControleLivro;