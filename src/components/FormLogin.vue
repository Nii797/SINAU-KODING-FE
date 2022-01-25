<template>

    <form class="formLogin">
        <img src="../assets/img/Sinau-Coding-1.png" alt="Logo">
        <div class="containerlogin">
                <div class="form-control">
                    <label for="username">Username</label><br>
                    <input v-model="username" type="text" name="username" id="username" placeholder="Enter Username">
                </div>
                <div class="form-control">
                    <label for="password">Password</label><br>
                    <input v-model="password" type="password" name="password" id="password" placeholder="Enter Password">
                </div>
                <div class="form-control">
                    <label for="emei">Imei</label><br>
                    <input v-model="emei" type="text" name="emei" id="emei" placeholder="Enter Emei">
                </div>
                <button @click="Login()" class="btn" type="button">login</button>
        </div>
    </form>
    
</template>

<script>
import axios from 'axios'

export default {

    data: function () {
        return {
            username: '',
            password: '',
            imei: '',
            response: []
        }
    },

    methods: {
        Login: async function () {
            const params = {title: this.username, password: this.password, emei:this.emei };
            axios.post("https://api.npms.io/v2/search?q=vue", params)
                .then(response  => this.articleId = response.data.id);
                this.$router.push('/login')
        }
    }

}
</script>