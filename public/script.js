function calcular() {
    let nome = document.getElementById("nome").value;
    let renda = Number(document.getElementById("renda").value);
    let qtdDespesas = Number(document.getElementById("despesas").value);

    if (isNaN(renda) || renda <= 0) {
        alert("Digite uma renda válida");
        return;
    }

    if (isNaN(qtdDespesas)) {
        alert("Digite um número válido de despesas");
        return;
    }

    if (qtdDespesas < 1) qtdDespesas = 1;
    if (qtdDespesas > 5) qtdDespesas = 5;

    let totalDespesas = 0;

    for (let i = 1; i <= qtdDespesas; i++) {
        let despesa = Number(prompt(`Digite o valor da despesa ${i}:`));

        while (isNaN(despesa)) {
            despesa = Number(prompt(`Valor inválido! Digite a despesa ${i}:`));
        }

        totalDespesas += despesa;
    }

    let sobra = renda - totalDespesas;
    let mensagem = "";

    if (totalDespesas > renda) {
        mensagem = "Gatou mais do que recebeu";
    } else {
        let percentual = sobra / renda;

        if (percentual >= 0.3) {
            mensagem = "Boa margem de sobra.";
        } else {
            mensagem = "Dá para melhorar.";
        }
    }

    let resultado = `
Nome: ${nome} <br>
Renda: R$ ${renda.toFixed(2)} <br>
Despesas: R$ ${totalDespesas.toFixed(2)} <br>
Sobra: R$ ${sobra.toFixed(2)} <br><br>
${mensagem}
`;
    document.getElementById("resultado").innerHTML = resultado;
    console.log(`Nome: ${nome}`);
    console.log(`Renda: ${renda}`);
    console.log(`Despesas: ${totalDespesas}`);
    console.log(`Sobra: ${sobra}`);
    console.log(mensagem);
}