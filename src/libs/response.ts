export class ResponseBuilder {
  private _code: number = 200;
  private _headers: Record<string, string | number | boolean> = {};
  private _body: string;

  /**
   * Defines the status code of the response
   * @param code
   */
  status(code: number) {
    this._code = code;
    return this;
  }

  /**
   * Defines the body data and also the Content-Type header as json.
   * @param body
   */
  json<T = Record<string, unknown>>(body: T) {
    this._headers['Content-Type']= 'application/json';
    this._body = JSON.stringify(body);
    return this;
  }

  /**
   * Defines a custom header
   * @param name
   * @param value
   */
  setHeader(name: string, value: string | number | boolean) {
    this._headers[name] = value;
    return this;
  }

  /**
   * Builds the response
   */
  build() {
    const response = {
      statusCode: this._code,
      body: this._body,
      headers: {
        ...this._headers
      },
    }
    Object.freeze(this);
    return response;
  }
}