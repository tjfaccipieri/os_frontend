import { Ordens } from "./Ordens";

export class Clientes {
  public id: number;
  public nome: string;
  public endRua: string;
  public endNum: number;
  public observacoes: string;
  public email: string;
  public cep: string;
  public telefone1: string;
  public telefone2: string;
  public whats: boolean;
  public ordem: Ordens[]
}