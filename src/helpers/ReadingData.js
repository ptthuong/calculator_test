const csvLoader = require('csv-load-sync');
import TestDataItem from '../entities/TestDataItem';

const SEPARATOR = ';';

export default class ReadingData {
  /**
   * Constructor
   * @param {String} csvFilePath
   */
  constructor(csvFilePath) {
    this._csvFilePath = csvFilePath;
    this._csv = [];
  }

  /**
   * Read input csv data file and return an array of datasets/rows.
   * @returns {Array} dataArray
   */
  readFile() {
    if (!this._csvFilePath) {
      throw new Error("No file path passed");
    }

    let dataArray = [];
    try {
      this._csv = csvLoader(this._csvFilePath);
      this._csv.forEach(item => {
        let dataItem = new TestDataItem();
        dataItem.description = item['description'];
        dataItem.inputs = item['operation'].replace(/ /g, '').split(SEPARATOR);
        dataItem.result = item['result'];
        dataArray.push(dataItem);
      });
    } catch (e) {
      throw new Error('Wrong file format.')
    }

    return dataArray;
  }
}