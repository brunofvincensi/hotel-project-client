import { HospedagemDTO } from './hospedagemDTO';

export class HospedeDTO {

    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    hospedagemAtual: HospedagemDTO;
    hospedagens: HospedagemDTO[];
}
