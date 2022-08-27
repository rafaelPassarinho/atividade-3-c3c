const num = document.querySelector("#num");
const btn = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

btn.onclick = () => {
    resultado.innerText = luidyMoura(num.value);
}

const luidyMoura = (numero) => {
    numero = Number.parseInt(numero);

    let lst = [];
    for(let i = 1; i <= numero; i++){
        let valor = "";
        if(i % 5 == 0 && i % 9 == 0){
            valor += "LuidyMoura";
        }else if(i % 5 == 0 && i % 9 != 0){
            valor += "Luidy";
        }else if(i % 5 != 0 && i % 9 == 0){
            valor += "Moura";
        }else{
            valor = i;
        }
        lst.push(valor);
    }
    return lst;
}