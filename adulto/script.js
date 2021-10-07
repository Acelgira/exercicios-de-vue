new Vue({
    el: ".app",


    data: {
        maioresIdade: 0,
        menoresIdade: 0
    },

    mounted() {

        for (var i = 1; i <= 5; i++) {

            idade = prompt("Insira a sua idade");
            if (idade >= 18) {
                this.maioresIdade++

            } else {
                this.menoresIdade++
            }
        }



        alert(this.maioresIdade + " Esses são os maiores de idade");

        alert(this.menoresIdade + " Esses são os menores de idade");

    }




})