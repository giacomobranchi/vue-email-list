/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */
const { createApp } = Vue

createApp({
    data() {
        return {
            randomMail: []
        }
    },
    methods: {
        getMail(n) {
            for (let i = 0; i < n; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => {
                        console.log(response);
                        this.randomMail.push(response.data.response);
                    });
            }

        }
    },
    mounted() {
        this.getMail(10);
    }
}).mount('#app')