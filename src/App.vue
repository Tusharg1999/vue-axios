<template>
    <div>
        <h1>Bitcoin Price Index</h1>
        <div v-for="i in info">
            <div>
            <h1>{{i.code}}</h1><span v-html="i.symbol"></span>
                <h1>{{i.rate}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(axios,VueAxios)
export default {
    data() {
        return{

            info:null
        }
    },
    created(){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
                this.info = response.data.bpi
            })
    },
    filter:{

    }

}
</script>
