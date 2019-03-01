import ElementError from './ElementError';

export default class ElementUtils {
  /**
   * Find and return an element by selector within timeout.
   * @param {String} selector
   * @param {Number} timeout
   * @param {boolean} isWaitForVisible
   * @returns {WebdriverIO.Element}
   */
  static element(selector, timeout = 5000, isWaitForVisible = true) {
    const elem = browser.$(selector);
    if (isWaitForVisible) {
      try {
        elem.waitForDisplayed(timeout);
      } catch (ex) {
        throw new ElementError({
          Class: 'ElementUtils',
          Method: 'element',
          Selector: selector
        }, 'ELEMENT_NOT_VISIBLE')
      }
    }
    return elem;
  }

  /**
   * Find and return an array of elements by selector within timeout.
   * @param {String} selector
   * @param {Number} timeout
   * @param {boolean} isWaitForVisible
   * @returns {Object[]}
   */
  static elements(selector, timeout = 5000) {
    const isVisible = this.isElementVisible(selector, timeout);
    if (isVisible) {
      return browser.$$(selector);
    }
    return [];
  }

  static isElementVisible(selector, timeout = 5000) {
    try {
      browser.$(selector).waitForDisplayed(timeout);
    } catch (e) {
      return false;
    }
    return true;
  }
}