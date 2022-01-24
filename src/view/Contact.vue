<template>
    <div class="container">
        <header>
            <router-link to="/"><img src="../assets/img/Sinau-Coding-1.png" alt="Logo"></router-link>
            <ul>
                <li><router-link to="/" class="active">home</router-link></li>
                <li><router-link to ="/about">about</router-link></li>
                <li><router-link to="/contact">contact</router-link></li>
            </ul>
            <button class="button">join us</button>
        </header>
        
        <main class="main">
            <div class="group1">
                <div class="word">
                    <h2 style="color:  white;">kontak kami</h2>
                    <p style="color: aliceblue;">Sinau Koding adalah Program Pelatihan Programer dengan materi yang relevan pada kebutuhan industri saat ini. Materi yang ditawarkan diantaranya pemrograman website dan android Lihat</p>
                </div>
                <div class="gambar">
                    <img src="../assets/img/flatdesign 1.png" alt="Gambar">
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