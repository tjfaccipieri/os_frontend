import { Clientes } from "./Clientes";

export class Ordens {
  public id: number;
  public equipamento: string;
  public descricao: string;
  public valor: number;
  public dataEntrada: Date;
  public dataEntrega: Date;
  public garantia: boolean;
  public entregue: boolean;
  public cliente: Clientes
}
