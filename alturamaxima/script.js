new Vue({
    el: "#vue",

    data: {
        // chave: valor == key: value
        homem: 0,
        mulher: 0,
        alturamax: 0,
        sexomax: 0,
        pessoa: { altura: 0, sexo: '' }
    },

    mounted() {


        for (var i = 1; i <= 5; i++) {
            this.pessoa.altura = prompt("digite a sua altura");
            this.pessoa.sexo = prompt("digite o seu sexo");

            if (this.pessoa.sexo == "masculino") {
                this.homem++
            } else {
                this.mulher++
            }

            if (this.alturamax < this.pessoa.altura) {
                this.alturamax = this.pessoa.altura
                this.sexomax = this.pessoa.sexo
            }
        }

        this.mostrarRespostas();
    },

    methods: {
        // chave: valor == key: value
        mostrarRespostas() {
            alert(this.homem + " Esses são os homens");
            alert(this.mulher + " Essas são as mulheres");
            alert(this.alturamax + " A maior pertence a uma pessoa do sexo " + this.sexomax);
        }
    }
})