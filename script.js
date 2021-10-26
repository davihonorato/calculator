function insert(num) {
    let result = document.getElementById('resultado').value;
    let last = result.slice(-1);
    let symbol = ["/", "*", "-", "+", "."];

    if (symbol.includes(last) && symbol.includes(num)) {
        document.getElementById('resultado').value = result;
    } else {
        document.getElementById('resultado').value = result + num;
    }
}

function clearAll() {
    document.getElementById('resultado').value = "";
}

function del() {
    let resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value =  resultado.substring(0, resultado.length - 1);
}

function calculate(){
    let result = document.getElementById('resultado').value;

    if (result) {
        document.getElementById('resultado').value = eval(result);
    }
}