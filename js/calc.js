function procFormulario() {
    var n1 = document.getElementById("num1").value;
    var op = document.getElementById("opera").value;
    var n2 = document.getElementById("num2").value;

    if (n1 == "") {
        alert("Preencha o primeiro número!");
        document.getElementById("num1").focus();
        return false;
    }

    if (op == "") {
        alert("Preencha a operação (+, -, *, /)");
        document.getElementById("opera").focus();
        return false;
    }

    if (n2 == "") {
        alert("Preencha o segundo número!");
        document.getElementById("num2").focus();
        return false;
    }

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    var res;

    switch(op) {
        case "+":
            res = n1 + n2;
            break;
        case "-":
            res = n1 - n2;
            break;
        case "*":
            res = n1 * n2;
            break;
        case "/":
            if (n2 == 0) {
                alert("Não pode dividir por zero!");
                return false;
            }
            res = n1 / n2;
            break;
        default:
            alert("Operação inválida!");
            return false;
    }

    if (Number.isInteger(res)) {
        if (res % 2 === 0) {
            alert("Resultado: " + res + "\nO resultado é PAR");
        } else {
            alert("Resultado: " + res + "\nO resultado é ÍMPAR");
        }
    } else {
        alert("Resultado: " + res + "\nO resultado não é um número inteiro (não é possível verificar se é par ou ímpar)");
    }

    return false;
}

function limparFormulario() {
    document.getElementById("num1").value = "";
    document.getElementById("opera").value = "";
    document.getElementById("num2").value = "";
}
