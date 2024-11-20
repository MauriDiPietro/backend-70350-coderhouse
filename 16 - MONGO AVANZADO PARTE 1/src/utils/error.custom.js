export class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
  }
}

// throw new CustomError('message de error', 404)
