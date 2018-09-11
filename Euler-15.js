function factorialize(k) {
  var j = 1;
  for(var i = 1; i <= k; i++){
    j *= i;
  }
  return j;
}

factorialize( 40 ) / ( factorialize( 20 ) * factorialize( 20 ) );
