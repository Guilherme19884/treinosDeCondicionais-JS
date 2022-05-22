/* fazer um programa que diga se a pessoa tem a estatura mediana do seu pais , caso ela não 
esteja dentro do padrão da altura informe se está abaixo ou acima !!!*/

const altura = 1.81

if(altura==1.70){
    console.log("Estatura mediana!")
}
else if ((altura>1.75) &&(altura<=1.80)){
    console.log("Estatura mediana alta")
}
else if ((altura> 1.80 )&& (altura<= 1.90)){
    console.log("alto")
}
else if (altura> 1.90){
    console.log("Quase gigante")
}
else{
    console.log("Baixinho")
}