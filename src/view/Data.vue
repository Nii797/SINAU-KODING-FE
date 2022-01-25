<template>
    <div class="data" style="color: white">

        <div class="card" style="width: 18rem;">
            <img src="../assets/img/flatdesign 1.png" class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text" style="color: black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>


        <h3>Vue Data</h3>   
        <br>
        <h3>Total : {{ this.responseTotal }}</h3>
        <br/>
        <div class="total">
            Total: <input type="text" v-model="this.responseTotal">
        </div>
        <div class="select">
            <select>
                <option v-for="item in response" v-bind:key="item.id" :value="item.package.name">{{ item.package.name }}</option>
            </select>
        </div>
        <div class="textarea">
            <textarea name="" id="" cols="30" rows="10" v-model="hasilTextarea"></textarea>
        </div>
        <br/>

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
            hasilTextarea: '',
        }
    },

    methods: {
        getData: async function () {
            const response = await fetch('https://api.npms.io/v2/search?q=vue');
            const data = await response.json();
            this.response = data.results;
            this.responseTotal = data.total;
            this.hasilTextarea  = this.response[0].package.description;
        },
    },

    mounted() {
        this.getData();
    },

}

</script>