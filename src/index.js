/* eslint-disable no-console */

// @flow

const replaces = {
  reset: '\x1B[0m',
  bold: '\x1B[1m',
  italic: '\x1B[3m',
  underline: '\x1B[4m',
  blink: '\x1B[5m',
  black: '\x1B[30m',
  red: '\x1B[31m',
  green: '\x1B[32m',
  yellow: '\x1B[33m',
  blue: '\x1B[34m',
  magenta: '\x1B[35m',
  cyan: '\x1B[36m',
  white: '\x1B[37m',
  grey: '\x1B[90m',
};

const isColorTag = (tag: Array): any => {
  const re = /^#([a-z]+)\{([a-z\s]+)\}$/;
  return tag.match(re);
};

const makeArray = (str: string): Array =>
  str.match(/(#[a-z]+\{[a-z]+\})|([a-z\s]+)/g);

export default (str: string): void => {
  const arr = makeArray(str);
  const result = arr.map((item) => {
    const newItem = isColorTag(item);
    return newItem ? `${replaces[newItem[1]]}${newItem[2]}${replaces.reset}` : item;
  }).join('');
  console.log(result);
};
