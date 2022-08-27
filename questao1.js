const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () =>{
    resultado.value = tipoTriangulo(lado1.value, lado2.value, lado3.value);
}

const tipoTriangulo = (lado1, lado2, lado3) => {
    if(lado1 == lado2 && lado2 == lado3){
        return "equilátero";
    }else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
        return "isósceles";
    }else{
        return "escaleno";
    }
}