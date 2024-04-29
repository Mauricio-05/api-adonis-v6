export interface ResponseSuccess<T> {
  status?: number
  success?: boolean
  data: T
  message: string
}

export interface ResponseError {
  status: number
  success: boolean
  error: any
  message: string
}
