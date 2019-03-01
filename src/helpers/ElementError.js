export default class ElementError {
  /**
   * Constructor
   * @param {Object} exception
   * @param {String} errorCode
   */
  constructor(exception, errorCode) {
    if (!exception.hasOwnProperty('Class')) {
      exception.Class = '';
    }
    if (!exception.hasOwnProperty('Method')) {
      exception.Method = '';
    }
    if (!exception.hasOwnProperty('Selector')) {
      exception.Selector = '';
    }
    this._exception = exception;
    this._errorCode = errorCode;
    this._handleException();
  }

  _handleException() {
    const errorTemplate = `
    ErrorCode: ${this._errorCode}
    Error: ${this._exception.Class} -> ${this._exception.Method},
    Selector: ${this._exception.Selector}`;
    throw new TypeError(errorTemplate);
  }
}