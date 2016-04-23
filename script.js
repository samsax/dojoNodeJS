var nombre = 'Samuel Arenas';
edad = 21;

if (edad > 18)
{
	alert('Es mayor de edad'); 	
}
else {
	alert('');
}
num = prompt('digite numero')
switch(num){
	case '1':
		console.log('uno');
		break;
	case '2':
		console.log('dos');
		break;
	default:
		console.log('otro');
		break;
}


var factorial = function(numero){
	factorial = 1;
	for (numero;numero>0; numero--){
		factorial *= numero;
	}
	return factorial
}

alert(factorial(num));

