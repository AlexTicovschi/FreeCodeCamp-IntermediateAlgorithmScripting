
function sumFibs(num) {

  var fibs =  [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309];
  var odd = [];
  
  fibs.map(function(item) {
    if (item % 2 !== 0 && item <= num) {
      odd.push(item);
    }
  });  
  
  return odd.reduce((a,b) => a + b);
}

sumFibs(5645636366);
