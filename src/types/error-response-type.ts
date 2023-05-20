import { MessageResponse } from "./message-response-type";

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}
