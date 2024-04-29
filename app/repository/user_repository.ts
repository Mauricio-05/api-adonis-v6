import { CreateUser } from '#types/user_type'

const UserDB: Array<object> = []

export default class UserRepository {
  async createUser(userData: CreateUser): Promise<CreateUser> {
    return new Promise((resolve) => {
      setTimeout(() => {
        UserDB.push(userData)

        resolve(userData)
      }, 300)
    })
  }

  async findAllUser(): Promise<Array<object>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(UserDB)
      }, 300)
    })
  }
}
