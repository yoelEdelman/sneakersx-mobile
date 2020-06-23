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

                    <ion-card class="card">
                        <ion-card-header>
                            <img alt="Vue logo" v-bind:src=" news.image ">
                        </ion-card-header>
                        <ion-card-subtitle>Écrit par {{ news.author.name }} {{ news.date }}</ion-card-subtitle>
                        <ion-card-title>{{ news.title }}</ion-card-title>
                        <ion-card-content v-html="news.content"></ion-card-content>
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
        name: 'home',
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
                .get('https://sneakersx.herokuapp.com/api/news/' + this.$route.params.id)
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