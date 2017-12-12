//porritas

function funcion1(){
	//alert('hola todos');
	//document.write('hola todos');
	var e1=document.getElementById('e1').value;
	var e2=document.getElementById('e2').value;
	var e3=document.getElementById('e3').value;
	var e4=document.getElementById('e4').value;
	var sumedad=parseInt(e1)+parseInt(e2)+parseInt(e3)+parseInt(e4);
	var prom;
	prom=sumedad/4;
	if(prom<18){
	document.getElementById('res1').innerHTML='el promedio de edad: ('+prom+') corresponde a JOVENES ';
	}else{
	document.getElementById('res1').innerHTML='el promedio de edad: ('+prom+') corresponde a ADULTOS ';
	}
}



//----------------------------------------------------------------------------------------------------------

function funcion2(){
	var vehiculo=document.getElementById('vehiculo').value;
	var peaje;
	var pasajeros;
	var tipo;

	if (vehiculo==1) {
		peaje=3500;
		pasajeros=5;
		tipo='automovil';
	} else if(vehiculo==2) {
		peaje=5000;
		pasajeros=3;
		tipo='camion';
	}else if(vehiculo==3){
		tipo='bus';
		pasajeros=prompt('de cuantos pasajeros es el bus?');
		peaje=parseInt(pasajeros)*200;
	}






document.getElementById('res2').innerHTML='tipo de vehiculo: '+tipo +',<br> numero de pasajeros:'+pasajeros+',<br>  valor del peaje:$'+peaje;

}
