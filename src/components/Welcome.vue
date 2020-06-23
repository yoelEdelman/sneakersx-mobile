<template>
    <div class="background-header-img" >
        <h1 >UN SHOPPING QUI A UN SENS</h1>
        <h3 class="title text-center">LIVRAISON GRATUITE & RETOURS GRATUITS PENDANT 100 JOURS</h3>
    </div>
</template>

<script>
    export default {
        name: "home",
    };
</script>

<style lang="scss">
    .background-header-img {
        background-image: url("../assets/home-header.jpg");
        height: 250px; /* You must set a specified height */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        color: lightgray;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>