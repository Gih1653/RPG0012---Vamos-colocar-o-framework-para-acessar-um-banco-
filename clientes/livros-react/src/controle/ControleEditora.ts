import {Editora} from '../modelo/Editora'

class ControleEditora {
    editoras: Array<Editora>;

    constructor() {
        this.editoras = [
            new Editora(1, 'Editora A'),
            new Editora(2, 'Editora B'),
            new Editora(3, 'Editora C')
        ];
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras.find(e => e.codEditora === codEditora);
        return editora ? editora.nome : undefined;
    }

    getEditoras(): Array<Editora> {
        return this.editoras;
    }
}

export default ControleEditora;