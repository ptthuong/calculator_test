import CalculatorScreen from '../../pages/operation/Index';

export default class Calculating {

  /**
   * Constructor
   * @param {TestDataItem} testDataItem
   */
  constructor(testDataItem) {
    this._inputs = testDataItem.inputs;
    this._expectedResult = testDataItem.result;
  }

  /**
   * Perform tapping on buttons in Calculator app to input operations.
   * @returns {Calculating}
   */
  inputOperations() {
    console.log(this._inputs);
    this._inputs.forEach(s => {
      console.log(s);
      CalculatorScreen.click(s);
    });
    return this;
  }

  /**
   * Verify result of input operations
   * @returns {Calculating}
   */
  verifyResult() {
    expect(CalculatorScreen.getResultText()).to.be.equal(this._expectedResult,'[FAIL] Incorrect result');
    return this;
  }
}