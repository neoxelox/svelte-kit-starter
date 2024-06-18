export enum ApiErrorCode {
  ERR_INVALID_REQUEST = 0,
  ERR_UNAUTHORIZED,
  ERR_NO_PERMISSION,
  ERR_NOT_FOUND,
  ERR_SERVER_GENERIC,
}

export class ApiError extends Error {
  public code: ApiErrorCode;
  public status: number;

  public constructor(code: ApiErrorCode, message: string, status: number) {
    super(message);
    this.code = code;
    this.status = status;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
