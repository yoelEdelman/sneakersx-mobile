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
                        <ion-title color="light">Produit</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content class="main-background">

                    <ion-card class="card">
                        <ion-card-header>
                            <ion-slides pager="true" :options="slideOpts">
                                <ion-slide>
                                    <img alt="Vue logo" v-bind:src=" product.main_image ">
                                </ion-slide>
                                <ion-slide>
                                    <img alt="Vue logo" v-bind:src=" product.images[0].filename ">
                                </ion-slide>
                                <ion-slide>
                                    <img alt="Vue logo" v-bind:src=" product.images[1].filename ">
                                </ion-slide>
                                <ion-slide>
                                    <img alt="Vue logo" v-bind:src=" product.images[2].filename ">
                                </ion-slide>
                                <ion-slide>
                                    <img alt="Vue logo" v-bind:src=" product.images[3].filename ">
                                </ion-slide>
                            </ion-slides>
                        </ion-card-header>
                        <ion-card-title>{{ product.name }}</ion-card-title>
                        <ion-card-content>Date de sortie : {{ product.release_date }}</ion-card-content>
                        <ion-card-content>Prix : {{ product.price }} €</ion-card-content>
                        <ion-card-content v-html="product.description"></ion-card-content>
                        <ion-button fill="outline" slot="end" :href="'http://sneakersx.herokuapp.com/products/' + this.$route.params.id">Voir sur le site</ion-button>
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
        name: 'product',
        data() {
            return {
                product: {},
            }
        },
        components: {
            Nav,
        },
        mounted () {
            this.axios
                .get('https://sneakersx.herokuapp.com/api/products/' + this.$route.params.id)
                .then((response) => {
                    this.product = response.data
                    console.log(this.product)
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