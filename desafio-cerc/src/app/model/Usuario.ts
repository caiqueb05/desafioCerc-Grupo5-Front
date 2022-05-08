import { Funcionario } from "./Funcionario"

export class Usuario {
  public idUsuario: number
  public nome: string
  public email: string
  public senha: string
  public linkFoto: string
  public cargo: string
  public cpf: string
  public tipoUsuario: string
  public funcionario: Funcionario[]
}
