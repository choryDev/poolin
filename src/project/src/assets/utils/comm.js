import React from "react";

export const comma = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const uncomma = value => value.replace(/[^\d]+/g, '');
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? '이메일을 올바르게 입력해주세요.': undefined;
export const sleep = time => new Promise((resolve) => setTimeout(resolve, time));
export const nullCheck = value => value === null || value === undefined ? true : false;
export const dateFormat = (value) => {
  var d = new Date(value),
    year = d.getFullYear(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export const replaceString = (str, match, fn) => {
  var curCharStart = 0;
  var curCharLen = 0;

  if (str === '') {
    return str;
  } else if (!str) {
    throw new TypeError('First argument to react-string-replace#replaceString must be a string');
  }

  var re = new RegExp(match);
  var result = str.split(re);

  // Apply fn to all odd elements
  for (var i = 1, length = result.length; i < length; i += 2) {
    curCharLen = result[i].length;
    curCharStart += result[i - 1].length;
    result[i] = fn(result[i], i, curCharStart);
    curCharStart += curCharLen;
  }
  return result;
}

export const replaceText_bold = text => {
  // Match #mentions@
  // return reactStringReplace(text, /@(\w+)/g, (match, i) => (
  return replaceString(text, /#([\u3131-\u318E\uAC00-\uD7A3\w]+)@/g, (match, i) => (
    <span style={{fontWeight: 'bold'}} key={match + i} >{match}</span>
  ));
}