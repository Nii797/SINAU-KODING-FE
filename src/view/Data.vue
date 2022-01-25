<template>
    <div class="data" style="color: white">
        <h3>Vue Data</h3>   
        <br>
        <h3>Total : {{ response.lenght }}</h3>
        <br>
        <table border="1" class="table" style="color: white" width="500">
            <thead>
                <td>Version</td>
                <td>Author</td>
                <td>Link</td>
                <td>Description</td>
                <td>Publisher</td>
            </thead>
            <tr v-for="item in response" v-bind:key="item.id">
                <td>{{item.package.version}}</td>
                <td v-if="item.package.author">{{ item.package.author.name }}</td>
                <td>{{item.package.version}}</td>
                <td>{{item.package.description}}</td>
                <td v-if="item.package.publisher">{{item.package.publisher.username}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    
    data: function () {
        return {
            response: [],
        }
    },

    methods: {
        getData: async function () {
            const response = await fetch('https://api.npms.io/v2/search?q=vue');
            const res = await response.json();
            this.response = res.results;
        },

        countData() {
            axios.get('https://api.npms.io/v2/search?q=vue').then(({ data}) => (this.response = data))
            console.log(this.response.length);
            return this.response.length;
        }
    },

    mounted() {
        this.getData()
    },

}

</script>