var app = new Vue({
    el: "#app",
    data: {
        soma: 0

    },
    mounted() {

        numero = prompt("insira o limite de notas") || 1

        for (var i = 1; i <= numero; i++) {
            nota = parseFloat(prompt("Insira a nota"));
            this.soma = this.soma + nota;
        }
        media = this.soma / numero;
        alert("A sua média é " + media);




    }
})