module.exports = reverse = n => {
    return +Math.abs(n).toString().split('').reverse().join('');
  };
