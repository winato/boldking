 
const randomRange = (x, y) => {
  return Math.floor(Math.random() * (y - x) + x);
}
 
const getMessage = (value) => {
  if (!value) {
    return "User name can't be empty";
  }
  if (value.length <= 8) {
    return "User name must be longer than 8 letters";
  }
  return `The user name "${value}" is already taken. Please choose another one`;
}

export {
  randomRange,
  getMessage,
}
