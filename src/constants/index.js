const MAP = {
  UP_SIDE_STR: 'U',
  UP_SIDE_NUM: 1,
  DOWN_SIDE_STR: 'D',
  DOWN_SIDE_NUM: 0,
};

const MESSAGE = {
  INPUT_SIZE: '다리의 길이를 입력해주세요.',
};
const ERROR_PREFIX = '[ERROR]';

const ERROR_MESSAGE = {
  INPUT_NUM: '입력값은 숫자여야 합니다.',
  INPUT_STR: '입력값은 문자여야 합니다.',
  INPUT_BLANK: '입력값에 공백이 포함되서는 안됩니다.',
  BRIDGE_SIZE: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: '이동 가능한 칸은 위(U) 또는 아래(D) 입니다.',
  COMMNAD: '재시도(R) 또는 종료(Q)를 입력해야 합니다.',
};
module.exports = {
  MAP,
  MESSAGE,
  ERROR_PREFIX,
  ERROR_MESSAGE,
};
