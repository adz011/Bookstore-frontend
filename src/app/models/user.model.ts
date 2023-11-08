export class UserRepresentation {
  email?: string
  password?: string
  firstname?: string
  lastname?: string
  nickname?: string
  role: string = "USER"

  constructor(email?: string, password?: string, firstname?: string, lastname?: string, nickname?: string) {
    this.email = email
    this.password = password
    this.firstname = firstname
    this.lastname = lastname
    this.nickname = nickname
  }
}
