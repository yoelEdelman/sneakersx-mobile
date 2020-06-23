<template>
    <div class="home">
        <ion-app>
            <Nav/>
            <div class="ion-page main-background" main>
                <ion-header class="header-background">
                    <ion-toolbar class="header-background">
                        <ion-buttons slot="start">
                            <ion-menu-button color="light"></ion-menu-button>
                        </ion-buttons>
                        <ion-title color="light">SneakersX</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content class="main-background">

                    <Welcome/>

                    <h2>Produits</h2>

                    <ion-card class="card" v-for="(res , index) in products">
                        <ion-card-header>
                            <img alt="Vue logo" v-bind:src=" res.main_image">
                        </ion-card-header>
                        <ion-card-title>{{ res.name }}</ion-card-title>
                        <ion-item>
                            <ion-card-content text-left>{{ res.price }} €</ion-card-content>
                            <ion-button fill="outline" slot="end" :href="'/products/' + res.id">Voir le produit</ion-button>
                        </ion-item>
                    </ion-card>

                    <h2>Actualités</h2>

                    <ion-card class="card" v-for="(res , index) in news">
                        <ion-card-header>
                            <img alt="Vue logo" v-bind:src=" res.image">
                        </ion-card-header>
                        <ion-card-subtitle>Écrit par {{ res.author.name }} {{ res.date }}</ion-card-subtitle>
                        <ion-card-title>{{ res.title }}</ion-card-title>
                        <ion-card-content>{{ res.summary }}</ion-card-content>
                        <ion-item>
                            <ion-button fill="outline" slot="end" :href="'/new/' + res.id">Lire la suite</ion-button>
                        </ion-item>
                    </ion-card>

                </ion-content>
            </div>
        </ion-app>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Nav from '@/components/Nav.vue'
    import Welcome from '@/components/Welcome.vue'

    export default {
        name: 'home',
        components: {
            Nav,
            Welcome
        },
        data() {
            return {
                products: {},
                news: {}
            }
        },
        mounted () {
            this.axios
                .get('http://sneakersx.herokuapp.com/api/home')
                .then((response) => {
                    this.products = response.data.products
                    this.news = response.data.news
                })
        },
    }
</script>

<style lang="scss">
    .header-background {
        --background: #212121 !important;
    }
    .main-background {
        --background: #e4e4e4;
    }
    .card {
        --background: white;
    }
</style>
