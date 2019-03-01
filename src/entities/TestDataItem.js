export default class TestDataItem {
  /**
   * Dataset description
   * @returns {String} description
   */
  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  /**
   * Output
   * @returns {Number} result
   */
  get result() {
    return this._result;
  }

  set result(value) {
    this._result = value;
  }

  /**
   * Array of operation strings
   * @returns {Array} inputs
   */
  get inputs() {
    return this._inputs;
  }

  set inputs(value) {
    this._inputs = value;
  }
}