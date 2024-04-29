import { HttpContext } from '@adonisjs/core/http'
import { Infer } from '@vinejs/vine/types'

import { createUserValidator } from '#validators/user'

export type CreateUser = Infer<typeof createUserValidator>

export interface UsersControlLerInterface {
  createUser({ request, response }: HttpContext): Promise<void>
  findAllUser({ request, response }: HttpContext): Promise<void>
}
