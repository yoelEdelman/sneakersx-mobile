<template>
    <ion-menu side="start" class="menu-background">
        <ion-header>
            <ion-toolbar color="#212121">
                <ion-title>
                    <ion-router-link color="light" href="/"><ion-icon size="large" name="home"></ion-icon></ion-router-link>
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-router-link color="light" href="/brands">Marques</ion-router-link>
                </ion-item>
                <ion-item>
                    <ion-router-link color="light" href="/products">Tous les produits</ion-router-link>
                </ion-item>
                <ion-item>
                    <ion-router-link color="light" href="/news">Actualités</ion-router-link>
                </ion-item>
                <ion-item>
                    <ion-router-link color="light" href="/contact">Contact</ion-router-link>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script>
    export default {
        name: "nav",
        components: {
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    ion-icon {
        color: white;
    }
</style>