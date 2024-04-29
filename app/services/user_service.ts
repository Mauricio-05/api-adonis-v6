import { inject } from '@adonisjs/core'

import UserRepository from '../repository/user_repository.js'

import { ResponseSuccess } from '#types/api_response_type'
import { CreateUser } from '#types/user_type'

@inject()
export default class UserService {
  constructor(protected userRepository: UserRepository) {}

  async createUser(userData: CreateUser): Promise<ResponseSuccess<CreateUser>> {
    const user = await this.userRepository.createUser(userData)

    return { data: user, message: 'Create user' }
  }

  async findAllUser(): Promise<ResponseSuccess<Array<object>>> {
    const users = await this.userRepository.findAllUser()

    return { data: users, message: 'List users' }
  }
}
