
const app = new Vue({
    el: '#app',
    data: {
        eMails: [],
    },
    methods: {},
    created() {
        for (i = 0, i = 10, i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.eMails.push(res.data.response);
                    console.log(res.data.response)
                }),
        }
    },
})