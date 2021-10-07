new Vue({
    el: ".app",

    data: {
        numero: 0

    },

    mounted() {
        for (var i = 1; i <= 5; i++) {
            this.numero = prompt("Insira o nomero");

            alert("O quadrado dos números é " + this.numero ** 2 + "\n");
        }

    }
})