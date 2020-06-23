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
                        <ion-title color="light">Produits</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content class="main-background">

                    <form>
                        <ion-item>
                            <ion-label position="stacked">Filtrer</ion-label>
                            <ion-input placeholder="Nom" :value="name" @input="name = $event.target.value"></ion-input>
                        </ion-item>

                        <ion-button expand="block" @click.prevent="submitForm()">Chercher</ion-button>
                    </form>

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

                </ion-content>
            </div>
        </ion-app>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Nav from '@/components/Nav.vue'
    import { integer, required } from 'vuelidate/lib/validators'


    export default {
        name: 'products',
        data() {
            return {
                products: {},
                name: null,
            }
        },
        components: {
            Nav,
        },
        validations: {
            name: {
                required,
            }
        },
        mounted () {
            this.axios
                .get('http://sneakersx.herokuapp.com/api/products/')
                .then((response) => {
                    this.products = response.data
                })
        },
        methods: {
            submitForm() {
                console.log('ok')
                this.$v.$touch()
                if (this.$v.name.$invalid ) {
                    this.$toastr('error', 'Veuillez entrer un nom à filtrer.', 'Error')
                }
                else {
                    const config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    this.axios
                        .get('http://sneakersx.herokuapp.com/api/products/filter?name=' + this.name, config)
                        .then((response) => {
                            this.products = response.data
                        })
                }
            }
        }
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