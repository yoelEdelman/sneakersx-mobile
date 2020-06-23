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
                        <ion-title color="light">Contact</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content class="main-background">


                    <form>
                        <ion-item>
                            <ion-label position="stacked">Votre nom</ion-label>
                            <ion-input placeholder="Votre nom" :value="name" @input="name = $event.target.value"></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-label position="stacked">Adresse e-mail</ion-label>
                            <ion-input placeholder="Adresse e-mail" :value="email" @input="email = $event.target.value"></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-label position="stacked">Numéro de téléphone</ion-label>
                            <ion-input placeholder="Numéro de téléphone" :value="phone" @input="phone = $event.target.value"></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-label position="stacked">Votre message</ion-label>
                            <ion-input placeholder="Votre message" :value="message" @input="message = $event.target.value"></ion-input>
                        </ion-item>

                        <ion-button expand="block" @click.prevent="submitForm()">Envoyer</ion-button>
                    </form>

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
        name: 'contact',
        data() {
            return {
                response: null,
                name: null,
                email: null,
                phone: null,
                message: null,
            }
        },
        components: {
            Nav,
        },
        validations: {
            name: {
                required,
            },
            email: {
                required,
            },
            phone: {
                required,
            },
            message: {
                required,
            }
        },
        methods: {
            submitForm() {
                console.log('ok')
                this.$v.$touch()
                if (this.$v.name.$invalid ) {
                    this.$toastr('error', 'Veuillez entrer votre nom.', 'Error')
                }
                else if (this.$v.email.$invalid ) {
                    this.$toastr('error', 'Veuillez entrer votre adresse e-mail.', 'Error')
                }
                else if (this.$v.phone.$invalid ) {
                    this.$toastr('error', 'Veuillez entrer votre numéro de téléphone.', 'Error')
                }
                else if (this.$v.message.$invalid ) {
                    this.$toastr('error', 'Veuillez écrire un message.', 'Error')
                }
                else {
                    const config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    this.axios
                        .post('http://sneakersx.herokuapp.com/api/contact', {
                            name: this.name,
                            email: this.email,
                            phone: this.phone,
                            message: this.message
                        }, config)
                        .then((response) => {
                            this.response = response.data
                            this.$toastr('success', this.response, 'Success')
                            this.name = null
                            this.email = null
                            this.phone = null
                            this.message = null
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