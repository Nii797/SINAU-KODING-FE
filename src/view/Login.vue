<template>  

    <div class="login">
        <h1>Silahkan Login</h1>
    </div>

</template>

<script>

export default {
    // data:function () {
    //     return{
    //         response:[],
    //     }
    // },
    // methods: {
    //     getData: async function () {
    //         const response = await fetch("https://api.npms.io/v2/search?q=vue");      
    //         const res = await response.json();
    //         this.response = res.data;
    //     },
    //     mounted(){
    //         this.getData()
    //     },
    // }

    data () {
        return {
            response: []
        }
    },
    
    mounted(){
        this.getData()
    },
    
    methods: {
        getData: async function () {
            const response = await fetch("https://api.npms.io/v2/search?q=vue");      
            const res = await response.json();
            this.response = res.results;
            console.log(this.response)
        },
    }
}
</script>