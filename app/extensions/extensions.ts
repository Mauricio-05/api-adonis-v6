import { Response } from '@adonisjs/core/http'

import { ResponseSuccess, ResponseError } from '#types/api_response_type'

Response.macro('success', function <
  T,
>(this: Response, { data, message, status = 200, success = true }: ResponseSuccess<T>): void {
  this.json({
    status,
    success,
    data,
    message,
  })
})

Response.macro(
  'error',
  function (this: Response, { error, message, status = 200, success = true }: ResponseError) {
    this.json({
      status,
      success,
      error,
      message,
    })
  }
)

declare module '@adonisjs/core/http' {
  export interface Response {
    success<T>(this: Response, { data, message, status, success }: ResponseSuccess<T>): void
    error(this: Response, { error, message, status, success }: ResponseError): void
  }
}
