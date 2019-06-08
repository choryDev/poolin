export const comma = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? '이메일을 올바르게 입력해주세요.': undefined;

export const sleep = time => new Promise((resolve) => setTimeout(resolve, time));
export const validateEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? true : false;
export const publicFeed = "/fd";
export const publicWorkspace = "/ws";