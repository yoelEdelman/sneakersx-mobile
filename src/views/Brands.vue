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
                        <ion-title color="light">Marques</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content class="main-background">

                    <h2>Marques</h2>

                    <ion-card class="card" v-for="(res , index) in brands">
                        <ion-card-header>
                            <img alt="Vue logo" v-bind:src=" res.image">
                        </ion-card-header>
                        <ion-card-title>{{ res.name }}</ion-card-title>
                        <ion-card-content>{{ res.banner }}</ion-card-content>
                        <ion-item>
                            <ion-button fill="outline" slot="end" :href="'/brand/' + res.id">Voir les produits</ion-button>
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
        name: 'brands',
        data() {
            return {
                brands: {},
            }
        },
        components: {
            Nav,
        },
        mounted () {
            this.axios
                .get('http://sneakerx.test/api/brands')
                .then((response) => {
                    this.brands = response.data
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