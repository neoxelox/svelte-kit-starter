export enum ApiErrorCode {
  ERR_INVALID_REQUEST = 0,
  ERR_UNAUTHORIZED,
  ERR_NO_PERMISSION,
  ERR_NOT_FOUND,
  ERR_SERVER_GENERIC,
}

export const ApiErrorMessage: Record<ApiErrorCode, string> = {
  [ApiErrorCode.ERR_INVALID_REQUEST]: "Invalid request, please check your input and try again.",
  [ApiErrorCode.ERR_UNAUTHORIZED]: "Authentication failed, please sign in or check your credentials.",
  [ApiErrorCode.ERR_NO_PERMISSION]:
    "Access denied, you don't have permission to view this resource or perform this action.",
  [ApiErrorCode.ERR_NOT_FOUND]: "Resource not found, the requested resource does not exist.",
  [ApiErrorCode.ERR_SERVER_GENERIC]:
    "An error occurred, please try again later. If the issue persists, contact our support team.",
};

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
