import { getMessage, randomRange } from '../utils'

const validate = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        if (value && value.length >= 8 && /^(a|e|i|o|u)/.test(value)) {
          resolve();
        } else {
          reject(new Error(getMessage(value)));
        }
      } else {
        reject(new Error(`Network error`));
      }
    }, randomRange(100, 1000));
  });
}
 
const submit = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(data);
        return;
      }
 
      reject(new Error("BANG! Try again later"));
    }, 2000);
  });
}


export default {
  validate,
  submit,
}
