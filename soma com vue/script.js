var app = new Vue({
    el: ".soma",

    data: {
        primeiro: 0,
        segundo: 0,
        resultado: 0
    },

    methods: {
        somar() {
            this.resultado = parseFloat(this.primeiro) + parseFloat(this.segundo)
        }
    }
});