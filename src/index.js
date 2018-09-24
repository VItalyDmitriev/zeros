module.exports = function getZerosCount(number) {
  res = 0;
  while(number > 0)
  {
    if(number>1){
      number /= 5;
      res += Math.floor(number);
    }else{
      break;
    }
  }
  return res;
}
