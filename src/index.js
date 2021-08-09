module.exports = function reverse(n) {
  const nToArr = ('' + n).split('');
  nToArr.reverse();
  if (nToArr.includes('-') === true) {
    nToArr.pop();
  }
  let arr = nToArr.join('');
  let res = Number(arr);
  return res;
}

