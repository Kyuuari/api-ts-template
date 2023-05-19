export interface MessageResponse {
  message: string;
}

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}
