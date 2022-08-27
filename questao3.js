const nota = document.querySelector("#nota")
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#calcArredondamento");
const aprovacao = document.querySelector("#aprovacao");

btn.onclick = () =>{
    let arredodamento = calcArrendodamento(nota.value);
    resultado.value = arredodamento;

    if (arredodamento >= 40){
        aprovacao.innerText = "Aprovado!"
    }else{
        aprovacao.innerText = "Reprovado!"
    }
}

const calcArrendodamento = (nota) =>{
    nota = Number.parseInt(nota);

    let modulo = nota % 5;
    if(nota < 38 || modulo < 3){
        return nota;
    }else{
        let result = nota + (5 - modulo);
        return result;
    }
}