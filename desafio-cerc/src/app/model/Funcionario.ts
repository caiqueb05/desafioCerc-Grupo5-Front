import { Cargo } from "./Cargo"
import { FolhaDePagamentoDTO } from "./FolhaDePagamentoDTO"
import { Usuario } from "./Usuario"

export class Funcionario{
  public idFuncionario: number
  public nome: string
  public cpf: string
  public linkFoto: string
  public email: string
  public cargo: Cargo
  public usuario: Usuario
  public folhaDePagamento: FolhaDePagamentoDTO
}
