<template>
    <ul class="header--container2-container center-mobile">
        <li class="header--container2-item">
            <a href="#" class="header--container2-link text-bege">
                <i class="fa-brands fa-whatsapp fa-2x"></i>
            </a>
        </li>
        <li class="header--container2-item">
            <a href="#" class="header--container2-link text-bege">
                <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
        </li>
        <li class="header--container2-item">
            <a href="#" class="header--container2-link text-bege">
                <i class="fa-brands fa-facebook-f fa-2x"></i>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SocialMedia',
}
</script>

<style scoped>

@media (max-width: 480px) {
  .center-mobile {
    margin: 0 0 0 40px ;
  }
}

</style>