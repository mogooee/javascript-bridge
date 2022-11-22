const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR_MESSAGE } = require('./constants');
const { throwError } = require('./utils');
const {
  inValidBlank,
  inValidNumber,
  inValidString,
  inValidSize,
  inValidMoving,
} = require('./Invalidator');

const InputView = {
  readBridgeSize(makeBridge) {
    try {
      Console.readLine(MESSAGE.INPUT_SIZE, (input) => {
        const size = Number(input);
        this.validateSize(size);
        makeBridge(size);
      });
    } catch (error) {
      Console.print(error);
    }
  },

  validateSize(size) {
    if (inValidString(size)) {
      throwError(ERROR_MESSAGE.INPUT_NUM);
    }

    if (inValidSize(size)) {
      throwError(ERROR_MESSAGE.BRIDGE_SIZE);
    }
  },

  readMoving(movePlayer) {
    Console.readLine(MESSAGE.INPUT_MOVING, (moving) => {
      try {
        this.validateMoving(moving);
        movePlayer(moving);
      } catch (error) {
        Console.print(error);
      }
    });
  },

  validateMoving(moving) {
    if (inValidNumber(moving)) {
      throwError(ERROR_MESSAGE.INPUT_STR);
    }

    if (inValidBlank(moving)) {
      throwError(ERROR_MESSAGE.INPUT_BLANK);
    }

    if (inValidMoving(moving)) {
      throwError(ERROR_MESSAGE.MOVING);
    }
  },

};

module.exports = InputView;
