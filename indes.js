let operacion= "";

t_dolar=0;
t_euros=0;
t_real=0;

dolar= 175;
euro= 181;
real= 100;

nombre=prompt("ingrese Usuario")
console.log("Bienvenido ", nombre);
while (operacion != "fin"){
    
    operacion = prompt("Ingrese la modena a comprar: dolar,euro,real")
    pesos= prompt("ingrese la cantidad de pesos a depositar")

    if(operacion == "dolar"){
        comp_dolar= pesos * dolar;
        console.log ("compro ", dolar, "Dolares");  
        t_dolar=t_dolar+comp_dolar
    }
    else if(operacion == "euro"){
        comp_euro= pesos * euro;
        console.log ("compro ", comp_euro, "Euros");  
        t_euros=t_euros+comp_euro
    }
    else if(operacion == "real"){
        comp_real= pesos *real;
        console.log ("compro ", comp_real, "Reales");  
        t_real=t_real+comp_real
    }
}
console.log ("Usted tiene" ,t_dolar ,"Dolares")
console.log ("usted tiene ",t_euros , "Euros")
console.log("usted tiene" , t_real , "reales")
