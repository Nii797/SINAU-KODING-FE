<template>
    <div class="data" style="color: white">
        <h3>Vue Data</h3>   
        <br>
        <h3>Total : {{ this.responseTotal }}</h3>
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
                <td>{{ item.package.version }}</td>
                <td v-if="item.package.author">{{ item.package.author.name }}</td>
                <td v-else>-</td>
                <td>{{ item.package.links.npm }}</td>
                <td>{{ item.package.version }}</td>
                <td>{{ item.package.description }}</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    
    data: function () {
        return {
            response: [],
            responseTotal: '',
        }
    },

    methods: {
        getData: async function () {
            const response = await fetch('https://api.npms.io/v2/search?q=vue');
            const data = await response.json();
            this.response = data.results;
            this.responseTotal = data.total;
        },
    },

    mounted() {
        this.getData();
    },

}

</script>