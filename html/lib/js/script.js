function f1()
{
	alert("This is f1");
}

function f2()
{
	alert("Ths is f2");
}

function f3 ()
{
	document.write("\'f3()\' wurde aufgerufen");
}

function f4(param1)
{
	document.write("f4 wurde mit folgendem Paramert aufgerufen: " + param1 + "<br />");
}

function f5(param1, param2)
{
	var comp;
	if (param1 > param2)
	{
		comp = "grösser";
	}
	else if (param1 < param2)
	{
		comp = "kleiner";
	}
	else if (param1 = param2)
	{
		comp = "gleich";
	}
	document.write("f5: param1=" + param1 + "; param2=" + param2 + " => param1 ist " + comp + " als param2 <br />");
}

function f6()
{
	var v1 = prompt("Geben Sie ihren Name ein: ", "");
	alert("f6: Herzlich willkommen, " + v1 + "!");
}

// Fakultät rekursiv berechnen
function f7(n)
{
	if (n > 0)
	{
		n = n*f7(n-1);
	}
	else
	{
		n = 1;
	}
	return(n);
}


