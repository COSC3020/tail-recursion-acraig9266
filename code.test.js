const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
  var fib_old = 1;
 	var fib = 1;
  	var fib_new = 1;
	while (n > 2) {
 		fib_new = fib + fib_old;
   		fib_old = fib;
     		fib = fib_new;
       		--n;
	 }
  return fib;
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib(n)) ==
            JSON.stringify(fibTest(n));
    });
jsc.assert(test);
