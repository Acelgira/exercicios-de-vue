var app = new Vue({
    el: "#vue",

    data: {
        nome: '',
        mostrarNomes: []
    },

    mounted() {
        for (var i = 1; i <= 5; i++) {
            nome = prompt("Escreve o nome");
            if (nome.length == 5) {
                this.mostrarNomes.push(nome);

            }

        }
        /*
        mostra apenas os nomes com 5 letras
        */
        alert("Os nomes são " + this.mostrarNomes);
    },

    methods: {

    }
})