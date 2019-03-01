import ReadingData from '../../helpers/ReadingData';
import Calculating from '../../test_flows/operation/Calculating';

describe('test calculator: clear button (AC & C)', () => {
  const testData = new ReadingData('resources/data/clearing.csv').readFile();

  testData.forEach((dataset) => {
    it(dataset.description, function () {
      new Calculating(dataset)
        .inputOperations()
        .verifyResult();
    });
  });
});