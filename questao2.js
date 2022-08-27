const ax2 = document.querySelector("#ax2");
const bx = document.querySelector("#bx");
const c = document.querySelector("#c");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#bhaskara");

btn.onclick = () =>{
    resultado.innerText = calcBhaskara(ax2.value, bx.value, c.value);
}

const calcBhaskara = (a, b, c) =>{
    a = Number.parseInt(a);
    b = Number.parseInt(b);
    c = Number.parseInt(c);

    delta = Math.pow(b,2) - 4 * a * c;
    if(delta < 0){
        return "Delta é negativo";
    }else{
        result1 = (-b + Math.sqrt(delta)) / (2 * a);
        result2 = (-b - Math.sqrt(delta)) / (2 * a);

        return [result1, result2];
    }
}