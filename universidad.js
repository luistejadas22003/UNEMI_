const leer = require ("prompt-sync")()
const escribir = require ("prompt-sync")()
class algoritmo
{
// OPERACION DE ASIGNACION
    algoritmo1(){

	let numero1 
	let numero2 
	let misterio 
	let letra 
	let palabra 
	numero1 = 10;
	numero2 = 19.67;
	misterio = false;
	letra = "a";
	palabras = "hola";
    }

	algoritmo2(){
	let num 
	num= leer ( " digite un valor entero: ")

	console.log ( "el numero es: ",num)
	}

	algortimo3(){
	let resultado
	let num1 
    let num2

	num1= leer( "digite un numero: ")

    num2= leer( " digite otro numero: ")
    

	resultado <- nume1 + num2

	console.log( "el resultado es: ",num1 + num2)

	}
// OPERADOR RELACIONALES
	algoritmo4(){
	let resultado 
	
	resultado <- 10 == 20;
    console.log( " el resultado es: ",resultado)
	}

	algoritmo5(){
	let a,b,c,resultado

    a= leer( " digite el valor de A: ")
    
    b= leer( " digite el valor de B: ")
   
	c= leer( " digite el valor de c: ")

    resultado <- (-b + rc(b^2 - 4*a*c))/(2*a);

    console.log( "El resultado es: ", resultado)
	}
// solucion de operacion logica 
	algoritmo6(){
	let a,b 
	let resultado
		
		
	a= leer( "digite el valor de A: ")
	
	b= leer( "digite el valor de B: ")
		
	resultado <- ((3+5*8)<3  ((-6/3*4)+2<2))  (a>b);
		
    console.log( "el resultado es: ",resultado)
		
	}
// intercambiar el valor de 2 variables 
    algoritmo7(){
	let a,b,aux 
    a= leer ("Digite el valor de a: ")
	b= leer ("digite el valor de b: ")
    aux=a
	a=b
	b=aux
	console.log( "El nuevo valor de a es: ",a)
	console.log( "El nuevo valor de a es: ",b)
	}
	// calcular la cantidad de segundos que estan incluidos en el
// numero de horas,minutos ,y segundos ingresados para el usuario.
    algoritmo8() {
	    let horas, minutos,segundos
	    let horas_seg, minutos_seg, total_seg  

	    horas= leer ("Digite las horas: ")

	    minutos= leer ("Digite los minutos: ")

	    segundos= leer ("Digite los segundos: ")

	    horas_seg= horas * 3600
	    minutos_seg= minutos * 60

	    total_seg= horas_seg + minutos_seg + segundos 

	    console.log("los segundo equivalentes son: ",total_seg)
   }
	
// hacer un programa para ingresar el radio de un sirculo y se 
// reporte su area y la longitud de la circunferencia.
// area = pi * radio^2
// lomgitud=2 * pi* radio
	algorritmo9(){
		let radio,area,lon 
		radio= leer ("Digite el valor del radio:")
		area = Math.PI * radio**2
		lon = 2 * Math.PI *radio
		console.log( "El area de la circunferencia es: ",area)
		console.log( "la longitud es: ",lon)
	}
// un maestro desea saber que porcentaje de hombres y que 
// porcentaje de mujeres hay en un grupo de estudiantes.
	algoritmo10(){
	let num_hombres,num_mujeres 
	let total_estudiantes 
	let porcentajeH, porcentajeM  
	num_hombres= leer ("digite el numero de hombres:")
	
	num_mujeres= leer ("digite el numero de mujeres: ")
	
	total_estudiantes = num_hombres+num_mujeres
	porcentajeH = num_hombres / total_estudiantes * 100;
	porcentajeM = num_mujeres/total_estudiantes * 100;

	console.log( " el porcentaje de hombres es: ",porcentajeH,"%")
	console.log("el porcentaje de mujeres es: ",porcentajeM,"%")
	}
// un profesor prepara cuestorios de fila a,b,c y quiere saber cuanto se tarde 
// en revisar el cuestonario
	algortimo11(){
	    let cantidadA,cantidadB,cantidadC 
	    let tiempoA,tiempoB,tiempoC 
		let tiempo_total 
		let horas, minutos

		cantidadA= leer ("digite la cantidad de cuestionarios A: ")

		cantidadB= leer("digite la cantidad de cuestionarios B: ")

		cantidadC= leer ("digite la cantidad de cuestionarios C: ")

		tiempoA = cantidadA * 5
		tiempoB = cantidadB * 8
		tiempoC = cantidadC * 6

		tiempo_total = tiempoA + tiempoB + tiempoC 

		horas = Math.trunc(tiempo_total / 60)

		minutos = tiempo_total % 60;

		console.log("se tardara ",horas," horas y ",minutos," minutos ")

	}
	// una tienda ofrece un descuento del 15% sobre el total de la 
// compra y un cliente desea saber cuanto debera pagar finalmente por su compra.
	ejercicio12(){
		let precio, descuento,precio_final 

		precio= leer ("digite el precio a pagar: ")

		descuento = precio*0.15

		precio_final = precio-descuento 

		console.log("el precio a pagar es de: ",precio_final)
	}
// un alumno quiere saber cual sera su calificacion final en la materia 
// de Algoritmo
// 55% del promediode sus tres calificaciones parciales 
// 15% de la calificacion de un trabajo final 
// 30%  de la calificacion del examne final
	ejercicio13(){
	    let parcial1, parcial2, parcial3, promedioP, notasParcial ;
	    let examen_final,notaExamen 
	    let notaTrabajo,notaFinalTrabajo 
	    let notaFinal  

	    parcial1,parcial2,parcial3= leer("digite las 3 notas de los parciales:")

	    promedioP = (parcial1+parcial2+parcial3)/3

	    notasParcial = promedioP*0.55

	    examen_final= leer("digite la nota del examen final: ")
        notaExamen = examen_final*0.3

	    notaTrabajo= leer("digite la nota del trabajo final: ")
	    notaFinalTrabajo = notaTrabajo * 0.15

	    notaFinal= (notasParcial + notaExamen + notaFinalTrabajo);
	    console.log("la calificacion final es: ",notaFinal)
	}
// digite un numero entero y reporte si es par o impar.
	ejercicio14(){
		let  num 
		num= leer ("digite un numero: ")
		
		if (num % 2 == 0){
			console.log("el numero ",num," es par")
	    } 
	  else {
			console.log( "elnumero ",num," es impar")
			
		}
	}
// determinar si un alumno aprueba o reprueba un curso
// sabiendo que aprobara si su promedio de tres calificaciones es 
// mayor o ingual a 70.
	ejercicio15(){
		let nota1,nota2,nota3 
		let promedio 
		nota1,nota2,nota3= leer ("digite las 3 calificaciones:")
		promedio = (nota1+nota2+nota3)/3
		if (promedio>=70) {
			console.log("el alumno esta aprobado con: ",promedio)
	    }
	  else{
			console.log("El alumno esta reprobado con: ",promedio)
	    }
	}
// en un almacen se hace un 20% de descuento a los clientes cuya compra
// supere a los $100
	ejercicio16(){
		let compra  
	    let descuento,precio_final 
	    compra= leer ("digite la cantidad a pagar: ")
	
	    if (compra>100) {
			descuento = compra*0.2
        }  
		else{
		 
		    descuento = 0
        }
	    precio_final = compra-descuento
	    console.log("el precio a pagar es: ",precio_final)
	}
// leer dos numeros; si son iguales que los multiplique,si el 
// primer es mayor que el segundo que los reste y si no que los sume
	ejercicio17(){
		let num1,num2,resultado
		num1,num2= leer( "digite dos numeros: ")
		
		if (num1=num2){
			resultado <- num1 - num2;
		}
		else{
			if (num1>NUM2){
				resultado <- num1 - num2;
			}
			else{
				resultado <- num1+ num2;
		    }
		}
		console.log( "el resultado es: ",resultado)
	}
// leer tres numeros diferentes e imprimir 
// el numero mayor de los tres.
	ejercicio18(){
	    let ;num1;num2;num3 
	    num1;num2;num3= leer("digite tres numeros diferentes: ")
		if (num1>num2 & num1>num3) {
			console.log("el mayor es: ",num1)
		} else {
			if (num2>num1 && num2>num3) {
				console.log("el mayor: ",num2)
			} else {
				console.log(" el mayor es: ")
			}
		}

		
	}
// una fruteria ofrece las manzanas con descuento segun la siguiente tabla.
	ejercicio19(){
	    let precioK,kilos,precioI 
	    let descuento,precio_final 
	    precioK=leer ( "cuanto cuenta el kilo de manzanas? ")
	
	    kilos= leer ( "cuantos kilos de manzanas a comprado? ")
 
	    precioI <- precioK * kilos

		if (kilos>=0 & kilos<=2) {
			descuento = 0
		} 
		else {
			if (kilos>=2.01 & kilos<=5) {
				descuento = precioi*0.1
			} 
			else {
				if (kilos>=5.01 & kilos<=10) {
					descuento = precioi*0.15
				} 
				else {
					descuento = precioi*0.2
				}
			}
		}
		precio_final = precioi-descuento
		console.log("el precio a pagar es: ",precio_final)
	}
// um programa que me demuestre los dias de la semana ingresando un numero 
// como el 1 al 7.
	ejercicio20(){
		let num 
		num= leer(" digite un numero del dia de la semana(1-7): ")
		switch (num) {
		case 1:
			console.log("lunes")
				
		case 2:
			console.log('mierte')
		case 3:
			console.log("miercoles")
			
		case 4:
			console.log("jueves")
				
		case 5:
			console.log("viernes")
				
		case 6:
			console.log("sabado")
				
		case 7:
			console.log("domingo")
			
		default:
			console.log(" error, no existe dia para ese numero:")
		}
	}
// muestre el significado de aniversario de cada decada haste los 60.
    jercicio21(){
		let decada 
		decada= leer("digite una decada")
		switch (decada) {
		case 10:
			console.log("bodas de hojalata",'<BR/>')
			
		case 20:
			console.log("bodas de pocelana")
			
		case 30:
			console.log("bodas de perlas")
			
		case 40:
			console.log("bodas de rubi")
			
		case 50:
			console.log("bodas de oro")
			
		case 60:
			console.log("bodas de diamastes")
		default:
			console.log("decada no existente")
		}
	}
// programa que tenga un menu con las siguientes opciones
	ejercicio22(){
		let opcion 
		console.log("menu")
		console.log("1.elevar un numero a una potencia x")
		console.log("2.sacar la raiz cuadrada de un numero",)
		console.log("3.salir ")
		console.log("digite una opcion: ")
		
		switch (opcion) {
		case 1:
			let num_
			let pot_
			
			num = leer ("digite la potencia",'<BR/>')
			
			pot = leer("digite la potencia",'<BR/>')
		
			resultado <-num^pot
			console.algoritmo1("el resultado es: ",resultado)
			
		case 2:
			let num 
			let resultado 
			num= leer("digite un numero: ")
		
			resultado <- rc(num)
			console.log(" el numero es: ",resultado)
			
		case 3:
			
		default:
			console.log("se equivoco de opcion de mune")
		}
	}
// ciclo del 1 al 10.
	ejercicio23(){
		let i 
	 for (i=1;i<=10;i+=1) {
		console(i)
	} 
    }
// ciclo repetitivo 
	ejercicio24(){
       let i
	   i = 1
	   do {
		    console(i)
		    i = i+1
	    }      while (i<=10)
	}
// calcular la suma de los "n" primeros numeros.
	ejercicio25(){ 
        let n,suma,i 
	    n= leer("digite la cantidad de numeros a sumarse:")
	
	    suma = 0
	    for (i=1;i<=n;i) {
		   suma = suma+i
	    }
	console.log(" la suma es : ",suma)
	}
// se desea calcular independiente la suma de los numeros pares y impares,
	ejercicio26(){
        let soma_pares;suma_pares;suma_impares;i
	    suma_pares = 0
	    suma_impares = 0
	    for (i=2;i<=49;i) {
		    if (i%2==0) {
			    suma_pares = soma_pares+i
		    } else {
			    suma_impares = suma_impares+i
		    }
	    }
	    console.log("la suma de pares es: ",suma_pares)
	    console,log("la suma es impares es: ",suma_impares)
    }
// leer 10 numeros e imprimir cuantos son positivos, cuantos son negativos
// y cuantos son neutros 
	ejercicio27(){
		let num;i
	    let conteo_positivos;conteo_negativos;conteo_neutros
	    conteo_positivos = 0
	    conteo_negativos = 0
	    conteo_neutros = 0
	    for (i=1;i<=10;i++) {
	    }
	    num= leer(i,"digite un numero: ")
	    
	    if (num==0) {
		    conteo_neutros = conteo_neutros+1;
	    } else {
		    if (num>0) {
			    conteo_positivos = conteo_positivos+1
		    } else {
			    conteo_negativos = conteo_negativos+1
		    }
	    }
	    console.log("la cantidad de positivos es: ",conteo_positivos)
	    console.log("la cantidad de negativos es: ",conteo_negativos)
	    console.log("la cantidad de neutro es: ",conteo_neutros)
	}
// suponga que se tiene un conjunto de calificaciones de un
// grupo de 10 alumnos. realizar un algoritmo para calcular 
// la calificacion promedio
	ejercicio28(){
		let calificacion_promedipo;calificacion_baja
	    let calificacion;suma;i
	    suma = 0
	    calificacion_baja = 99999;
	    for (i=1;i<=10;i++) {
		    dcalificacion= leer(i,". digite una calificacion:")
		    
		    suma = suma+calificacion
		    if (calificacion<calificacion_baja) {
			    calificacion_baja = calificacion
		    }
	    }
	    calificacion_promedio = suma/10
	    console.log("la calificacion promedio es: ",calificacion_promedipo)
	    console.log("la calificacion mas baja es: ",calificacion_baja)
	}
// calcular el factorial de un numero mayor o igual a 0
	ejercicio29(){
		let factorial
	    let num 
	    let i 
	    let factoral
        do {
		    num= leer("digite un numero;")
	
	    } while (num<0)
	    i = 1
	    factorial = 1
	    while (i<=num) {
		   factorial = factorial*i
		   i = i+1
	    }
	    console.log("el factoral es; ",factoral)
	}
// calcular la siguiente sumatoria de los "n"n elementos.
	ejercicio30(){
		let n_elementos
		let i 
		n_elementos= leer("digite la cantidad de elementos a sumarse: ")
		i = 1
		sumar = 0
		while (i<=n_elementos) {
			suma = suma+i^2
			i = i+1
			console.log("la suma es: ",suma)
		}
	}
//infresar "n" enteros, visualizar la suma de los numeros pares 
//de la lista, cuantos numeros pares existen y cual es el promedio 
//de los numeros impares.

	ejercicio31(){
		let n_elementos;i;num
		let suma_pares;conteo_pares
		let suma_impares;conteo_impares
		let promedio
		n_elementos= leer("digite la cantidad de elementos a ingresar: ",'<BR/>');
		
		i = 1;
		suma_pares = 0
		conteo_pares = 0
		suma_impares = 0
		conteo_impares = 0
		while (i<=n_elemento) {
			n_elementos= leer(i,". digite un numero: ")
			while (i<=n_elementos) {
				num= leer (i,".digite un numero: ")
	
				if (num%2==0) {
					suma_pares = suma_pares+num
					connteo_pares = conteo_pares+1
				} else 
					suma_impares = suma_impares+num
					conteo_impares = conteo_impares+1
				}
			}
			i = i+1;
			if (conteo_pares==0) {
				console.log("no se ha digitado numeros pares")
				console.log(" la suma de los numeros pares es: ",sumar_pares)
				console.log("el conteo de los numeres pares es: ",conteo_pares)
			}
			if (conteo_impares==0) {
				console.log("no se han digitado numeros impares")
			} else {
				promedio_ompares = suma_importantes/conteo_impares
				console.log("el promedio de impares es: ",promedio_impares)
		}	
			
	}

	ejercicio32(){
// calcular la salida de salario y la sumatoria de todo el salario 
		let horas 
		hora= leer(" dijite hora de trabajo: ")
	
		resultado = hora*2.25
		console.log("su pago por hora:",resultado)
		console.loge("su pago por quinsena:",resultado*15)
		console.log("su pago por mes:",resultado*30)
	}

}
