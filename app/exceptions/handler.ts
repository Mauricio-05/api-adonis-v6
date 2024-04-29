import app from '@adonisjs/core/services/app'
import { errors } from '@adonisjs/core'
import { errors as errorsVine } from '@vinejs/vine'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'

export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: unknown, ctx: HttpContext) {
    if (error instanceof errors.E_ROUTE_NOT_FOUND) {
      ctx.response.status(404).error({
        status: error.status,
        success: false,
        error: error.code,
        message: 'Not Found',
      })

      return
    }

    if (error instanceof errorsVine.E_VALIDATION_ERROR) {
      ctx.response.status(422).error({
        status: error.status,
        success: false,
        error: error.messages,
        message: 'Unprocessable Content',
      })

      return
    }

    if (error instanceof errors.E_HTTP_EXCEPTION) {
      ctx.response.status(error.status).error({
        status: error.status,
        success: false,
        error: error.code,
        message: error.message,
      })

      return
    }

    return super.handle(error, ctx)
  }

  /**
   * The method is used to report error to the logging service or
   * the third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    ctx.logger.error(error, `Error en la URL: ${ctx.request.url()}`)
    return super.report(error, ctx)
  }
}
