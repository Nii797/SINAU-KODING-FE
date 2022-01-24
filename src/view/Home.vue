<template>
    <div class="container">
        <header>
            <router-link to="/"><img src="../assets/img/Sinau-Coding-1.png" alt="Logo"></router-link>
            <ul>
                <li><router-link to="/" class="active">home</router-link></li>
                <li><router-link to ="/about">about</router-link></li>
                <li><router-link to="/contact">contact</router-link></li>
            </ul>
            <!-- <button class="button" @click="clickJoinUs()">join us</button> -->
            <button class="button" @click="showForm()">join us</button>
        </header>
        
        <main class="main">
            <div class="group1">
                <div class="word">
                    <h2 style="color:  white;">welcome to sinau koding academy</h2>
                    <p style="color: aliceblue;">Sinau Koding adalah Program Pelatihan Programer dengan materi yang relevan pada kebutuhan industri saat ini. Materi yang ditawarkan diantaranya pemrograman website dan android Lihat</p>
        
                    <p>{{ name }} {{ age }}</p>
        
                </div>
                <div class="gambar-form">
                    <img v-if="clearImage === false" src="../assets/img/flatdesign 1.png" alt="Gambar">
                    <form action="" class="formLogin">
                        <div class="container">
                            <center><img src="../assets/img/Sinau-Coding-1.png" alt="Logo"></center>
                            <div class="form-control">
                                <label for="username">Username</label><br>
                                <input type="text" name="username" id="username">
                            </div>
                            <div class="form-control">
                                <label for="username">Username</label><br>
                                <input type="text" name="username" id="username">
                            </div>
                            <div class="form-control">
                                <label for="username">Username</label><br>
                                <input type="text" name="username" id="username">
                            </div>
                            <button class="btn">login</button>
                        </div>    
                    </form>
                </div>
            </div>
        </main>
        
        <footer>
            <div class="copyright">
                <p>sinau koding academy 2021 &copy;</p>
            </div>
            <div class="join-and-tweet">
                <p>join us</p>
                <img src="../assets//img/tweet.png" alt="tweet">
            </div>
        </footer>
    </div>
</template>

<script>

    export default {
        data: function () {
            return {
                name: 'Soni Hidayatulloh',
                age: `${23} Years old`,
                clearImage: false
            }
        },

        // mounted () {},

        methods: {
            
            showForm: async function () {
                this.clearImage = true
            },

            clickJoinUs: async function () {
                alert(`Hello ${this.name} selamat datang dan selamat belajar VueJS`);
            }


            // showTitle(){
            //     this.title = 'Sinau Koding'
            // }

            // showTitle: async function () {
            //     console.log(`Hello ${this.name} selamat datang dan selamat belajar VueJS`);
            // },

        }
    }

</script>