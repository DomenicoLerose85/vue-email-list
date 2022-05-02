
const app = new Vue({
    el: '#app',
    data() {
        return {
            eMails: []
        }
    },
    mounted() {
        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(res => {
                    let response = res.data.response
                    this.eMails.push(response)
                    console.log(this.eMails);
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }
});