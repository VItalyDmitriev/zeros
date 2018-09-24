module.exports = function getZerosCount(number) {
  var res = 0;
  for(var i=1; i<=number; i++){
    divideonfive(i);
  }

  function divideonfive(i){
    if(i%5==0){
      res++;
      divideonfive(i/5);
    }else{
      return;
    }
  }
  return res;
}
