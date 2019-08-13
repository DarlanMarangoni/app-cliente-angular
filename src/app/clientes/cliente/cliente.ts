export class Cliente{

    id: string;
    nome: string;
    cpf: string;
    dataNascimento: string;

    constructor(id: string, nome: string, cpf: string, dataNascimento: string){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
}