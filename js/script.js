document.getElementById('n1').addEventListener("click", n1);
document.getElementById('n2').addEventListener("click", n2);
document.getElementById('n3').addEventListener("click", n3);
document.getElementById('n4').addEventListener("click", n4);
document.getElementById('n5').addEventListener("click", n5);
document.getElementById('n6').addEventListener("click", n6);
document.getElementById('n7').addEventListener("click", n7);
document.getElementById('n8').addEventListener("click", n8);
document.getElementById('n9').addEventListener("click", n9);
document.getElementById('n0').addEventListener("click", n0);
document.getElementById('punto').addEventListener("click", punto);
document.getElementById('porcentaje').addEventListener("click", porcentaje);
document.getElementById('AC').addEventListener("click", AC);
document.getElementById('suma').addEventListener("click", suma);
document.getElementById('resta').addEventListener("click", resta);
document.getElementById('multiplicacion').addEventListener("click", multiplicacion);
document.getElementById('division').addEventListener("click", division);
document.getElementById('parentesis1').addEventListener("click", parentesis1);
document.getElementById('parentesis2').addEventListener("click", parentesis2);
document.getElementById('igual').addEventListener("click", showresult);

function n1(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n1").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n2(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n2").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n3(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n3").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}


function n4(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n4").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n5(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n5").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n6(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n6").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n7(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n7").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n8(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n8").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n9(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n9").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n0(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("n0").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function punto(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("punto").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function porcentaje(){
	var actual= document.getElementById("resultado").innerHTML;

	document.getElementById("resultado").innerHTML= actual / 100;
}

function AC(){
	document.getElementById("resultado").innerHTML= " ";
}

function suma(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("suma").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function resta(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("resta").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function multiplicacion(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("multiplicacion").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function division(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("division").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function parentesis2(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("parentesis2").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function parentesis1(){
	var actual= document.getElementById("resultado").innerHTML;
	var sumado = document.getElementById("parentesis1").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}


function showresult(){
	var actual= document.getElementById("resultado").innerHTML;
	var sum =  actual.indexOf("+");
	var rest =  actual.indexOf("-");
	var mult =  actual.indexOf("x");
	var div =  actual.indexOf("÷");



if ( sum !== -1) {
		arr= actual.split("+",2);
		res= parseFloat(arr[0]) + parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = res;
} else if (rest !== -1 ) {
		

		arr= actual.split("-",2);
		res= parseFloat(arr[0]) - parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	
} else if (mult!== -1) {
		arr= actual.split("x",2);
		res= parseFloat(arr[0]) * parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = res;

}else if(div!== -1){

		arr= actual.split("÷",2);

		if (arr[1] != 0) {
		res= parseFloat(arr[0]) / parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = res;
		}else{
			document.getElementById("resultado").innerHTML = "Error";
		}
	
}





}