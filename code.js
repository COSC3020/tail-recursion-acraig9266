function fib(n) {
	if (n < 2) {
		return 1;
	} else {
		i = 3;
		iMin1 = 1;
		iMin2 = 0;
		return fibHelp(n, i, iMin1, iMin2);
	}
}

function fibHelp(n, i, iMin1, iMin2) {
	if (i > n) {
		return (iMin1 + iMin2);
	} else {
		tmp = iMin1;
		iMin1 += iMin2;
		iMin2 = tmp;
		return fibHelp(n, i + 1, iMin1, iMin2);
	}
}
