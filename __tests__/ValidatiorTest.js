const { ERROR_MESSAGE } = require('../src/constants');
const { runException, mockRandoms } = require('../src/utils/testUtils');

describe('입력값 예외 처리 테스트', () => {
  test.each([
    [['a'], ERROR_MESSAGE.INPUT_NUM],
    [[2], ERROR_MESSAGE.BRIDGE_SIZE],
    [[21], ERROR_MESSAGE.BRIDGE_SIZE],
  ])('다리 길이가 3 이상 20 이하가 아닌 경우 예외 처리한다.', (input, error) => {
    runException(input, error);
  });

});