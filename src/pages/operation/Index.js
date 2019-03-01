import ElementUtils from '../../helpers/ElementUtils';

const AC_BUTTON = '~all clear';
const C_BUTTON = '~clear';
const PLUS_MINUS_BUTTON = '~plus, minus';
const ZERO_DIGIT_BTN = '-ios predicate string:type == "XCUIElementTypeButton" && label == "0"';
const ONE_DIGIT_BTN = '-ios predicate string:type == "XCUIElementTypeButton" && label == "1"';
const TWO_DIGIT_BTN = '-ios predicate string:type == "XCUIElementTypeButton" && label == "2"';
const THREE_DIGIT_BTN ='-ios predicate string:type == "XCUIElementTypeButton" && label == "3"';
const FOUR_DIGIT_BTN = '-ios predicate string:type == "XCUIElementTypeButton" && label == "4"';
const FIVE_DIGIT_BTN = '-ios predicate string:type == "XCUIElementTypeButton" && label == "5"';
const SIX_DIGIT_BTN ='-ios predicate string:type == "XCUIElementTypeButton" && label == "6"';
const SEVEN_DIGIT_BTN = '-ios predicate string:type == "XCUIElementTypeButton" && label == "7"';
const EIGHT_DIGIT_BTN = '-ios predicate string:type == "XCUIElementTypeButton" && label == "8"';
const NINE_DIGIT_BTN ='-ios predicate string:type == "XCUIElementTypeButton" && label == "9"';
const PERCENT_BUTTON = '~percent';
const DIVIDE_BUTTON ='~divide';
const MULTIPLY_BTN ='~multiply';
const SUBTRACT_BTN = '~subtract';
const ADD_BTN = '~add';
const EQUAL_BTN ='~equals';
const DECIMAL_BTN = '~decimal';
const RESULT_BOX = '~Result';

class Index {

  constructor() {
    let mapEvent = {};
    mapEvent['0'] = this.clickOnZeroDigitButton;
    mapEvent['1'] = this.clickOnOneDigitButton;
    mapEvent['2'] = this.clickOnTwoDigitButton;
    mapEvent['3'] = this.clickOnThreeDigitButton;
    mapEvent['4'] = this.clickOnFourDigitButton;
    mapEvent['5'] = this.clickOnFiveDigitButton;
    mapEvent['6'] = this.clickOnSixDigitButton;
    mapEvent['7'] = this.clickOnSevenDigitButton;
    mapEvent['8'] = this.clickOnEightDigitButton;
    mapEvent['9'] = this.clickOnNineDigitButton;
    mapEvent['+'] = this.clickOnAddButton;
    mapEvent['-'] = this.clickOnSubtractButton;
    mapEvent['*'] = this.clickOnMutiplyButton;
    mapEvent['/'] = this.clickOnDivideButton;
    mapEvent['%'] = this.clickOnPercentButton;
    mapEvent['AC'] = this.clickOnAcButton;
    mapEvent['C'] = this.clickOnCButton;
    mapEvent['='] = this.clickOnEqualButton;
    mapEvent['.'] = this.clickOnDecimalButton;
    mapEvent['+/-'] = this.clickOnPlusMinusButton;
    this.mapEvent = mapEvent;
  }

  click(signal) {
    if (this.mapEvent[signal]) {
      this.mapEvent[signal]();
    } else {
      throw new Error('Invalid input "' + signal + '"');
    }
    return this;
  }

  clickOnAcButton() {
    ElementUtils.element(AC_BUTTON).click();
    return this;
  }

  clickOnCButton() {
    ElementUtils.element(C_BUTTON).click();
    return this;
  }

  clickOnPercentButton() {
    ElementUtils.element(PERCENT_BUTTON).click();
    return this;
  }

  clickOnDivideButton() {
    ElementUtils.element(DIVIDE_BUTTON).click();
    return this;
  }

  clickOnMutiplyButton() {
    ElementUtils.element(MULTIPLY_BTN).click();
    return this;
  }

  clickOnSubtractButton() {
    ElementUtils.element(SUBTRACT_BTN).click();
    return this;
  }

  clickOnAddButton() {
    ElementUtils.element(ADD_BTN).click();
    return this;
  }

  clickOnDecimalButton() {
    ElementUtils.element(DECIMAL_BTN).click();
    return this;
  }

  clickOnPlusMinusButton() {
    ElementUtils.element(PLUS_MINUS_BUTTON).click();
    return this;
  }

  clickOnEqualButton() {
    ElementUtils.element(EQUAL_BTN).click();
    return this;
  }

  clickOnZeroDigitButton() {
    ElementUtils.element(ZERO_DIGIT_BTN).click();
    return this;
  }

  clickOnOneDigitButton() {
    ElementUtils.element(ONE_DIGIT_BTN).click();
    return this;
  }

  clickOnTwoDigitButton() {
    ElementUtils.element(TWO_DIGIT_BTN).click();
    return this;
  }

  clickOnThreeDigitButton() {
    ElementUtils.element(THREE_DIGIT_BTN).click();
    return this;
  }

  clickOnFourDigitButton() {
    ElementUtils.element(FOUR_DIGIT_BTN).click();
    return this;
  }

  clickOnFiveDigitButton() {
    ElementUtils.element(FIVE_DIGIT_BTN).click();
    return this;
  }

  clickOnSixDigitButton() {
    ElementUtils.element(SIX_DIGIT_BTN).click();
    return this;
  }

  clickOnSevenDigitButton() {
    ElementUtils.element(SEVEN_DIGIT_BTN).click();
    return this;
  }

  clickOnEightDigitButton() {
    ElementUtils.element(EIGHT_DIGIT_BTN).click();
    return this;
  }

  clickOnNineDigitButton() {
    ElementUtils.element(NINE_DIGIT_BTN).click();
    return this;
  }

  getResultText() {
    return ElementUtils.element(RESULT_BOX).getText();
  }
}

export default new Index();