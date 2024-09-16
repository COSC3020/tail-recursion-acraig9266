# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.


Best case: n = 0, 1, 2
Average/Worst Case: n > 2

Unless denoted otherwise, any line is O(1) and can be ignored

function fib(n) {
	if (n == 0) {                                        
		return 0;                                    
	} else if (n == 1 || n == 2) {                       
		return 1;                                    
	} else {                      
		i = 3;                                       
		iMin1 = 1;                                   
		iMin2 = 0;                                   
		return fibHelp(n, i, iMin1, iMin2);          // O(1) Line only ever executes once
	}
}

function fibHelp(n, i, iMin1, iMin2) {
	if (i > n) {                                   	     
		return (iMin1 + iMin2);                      
	} else {
		tmp = iMin1;                                  
		iMin1 += iMin2;                               
		iMin2 = tmp;                                  
		return fibHelp(n, i + 1, iMin1, iMin2);       $\Theta$(n), line is reached and run (n - 2) times because the recursion breaks when i > n. i incremented every call, i begins at 3.
  }
}

Complexity of Tail Recursive: $\Theta$(n)
