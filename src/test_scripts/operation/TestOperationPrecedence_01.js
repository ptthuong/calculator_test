import ReadingData from '../../helpers/ReadingData';
import Calculating from '../../test_flows/operation/Calculating';

describe('test calculator: operation precedence', () => {
  const testData = new ReadingData('resources/data/operations.csv').readFile();

    testData.forEach((dataset) => {
        it(dataset.description, function () {
          new Calculating(dataset)
            .inputOperations()
            .verifyResult();
        });
    });
});