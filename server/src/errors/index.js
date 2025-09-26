export class RouteNotImplementedError extends Error {
  constructor(message = "Route not implemented") {
    super(message);
    this.name = "RouteNotImplementedError";
    this.status = 501; // Not Implemented
  }
}
