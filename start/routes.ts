import router from '@adonisjs/core/services/router'

// #controllers
const UsersController = () => import('#controllers/users_controller')

router
  .group(() => {
    router
      .group(() => {
        router.post('', [UsersController, 'createUser'])
        router.get('', [UsersController, 'findAllUser'])
      })
      .prefix('users')
  })
  .prefix('api/v1')
