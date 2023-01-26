<template>
    <section>
        <div>
            <img :src="url" :alt="alt" v-on:load="alterarImagem" class="w-100" id="homeBanner" />
        </div>
    </section>
</template>

<script>
export default{
    name: 'BannerVue',
    data() {
        return {
            url: require(`@/assets/images/background/background-1.png`),
            alt: 'Grand Royal Hotel'
        }
    },
    methods: {
        alterarImagem() {
            let qtdImagens = 7;
            let sorteio = parseInt(Math.random() * qtdImagens);
            this.url = require(`@/assets/images/background/background-${sorteio + 1}.png`);
        }
    }
}
</script>