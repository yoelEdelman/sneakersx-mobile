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
                        <ion-title color="light">Actualités</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content class="main-background">

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

    export default {
        name: 'news',
        data() {
            return {
                news: {},
            }
        },
        components: {
            Nav,
        },
        mounted () {
            this.axios
                .get('https://sneakersx.herokuapp.com/api/news')
                .then((response) => {
                    this.news = response.data
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