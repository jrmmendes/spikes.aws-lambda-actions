class Result<T, E = never> {
  private constructor(private readonly _value: T, private readonly _error: E) {
    if (!_value && !_error) {
      throw new Error('Invalid call to Result constructor. Either "value" or "error" must be provided');
    }

    if (_value !== undefined && _error !== undefined) {
      throw new Error('Invalid call to Result constructor. "value" and "error" cannot both be provided');
    }

    this._value = _value;
    this._error = _error;
  }

  static ok<T>(value: T) {
    return new Result<T, never>(value, undefined as never);
  }

  static failure<E>(error: E) {
    return new Result<never, E>(undefined as never, error);
  }

  get isFailure() {
    return this._error !== undefined;
  }

  get isSuccess() {
    return this._value !== undefined;
  }

  get value(): T {
    if (this.isFailure) throw new Error('A error result does not have a value');
    return this._value;
  }

  get error(): E {
    if (this.isSuccess) throw new Error('A success result does not have a error');
    return this._error;
  }
}

type FailResult<E> = Result<never, E>;
type SuccessResult<T> = Result<T>;