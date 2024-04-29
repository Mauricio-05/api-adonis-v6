import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

// #validators
import { createUserValidator } from '#validators/user'
//types
import { UsersControlLerInterface } from '#types/user_type'
//service
import UserService from '#services/user_service'

@inject()
export default class UsersController implements UsersControlLerInterface {
  constructor(protected userService: UserService) {}

  async createUser({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)

    response.success(await this.userService.createUser(payload))
  }

  async findAllUser({ response }: HttpContext) {
    response.success(await this.userService.findAllUser())
  }
}
