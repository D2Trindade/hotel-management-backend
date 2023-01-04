<template>
    <div :id="'card'+id" class="acomodacoes--card card">
        <h2 class="acomodacoes--card-titulo"></h2>
        <a href="" class="acomodacoes--card-btn"></a>
    </div>
</template>

<script>
export default {
    name: "AcomodacaoCard",
    props: {
        id: String
    }
}
</script>

<style scoped>
#card1 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-presidencial-1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card1 h2::before {
    content: "Quarto 1 Presidencial";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card2 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-presidencial-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card2 h2::before {
    content: "Quarto 2 Presidencial";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card3 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-presidencial-3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card3 h2::before {
    content: "Quarto 3 Presidencial";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card4 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-luxo-1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card4 h2::before {
    content: "Quarto 1 Luxo";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card5 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-luxo-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card5 h2::before {
    content: "Quarto 2 Luxo";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card6 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-luxo-3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card6 h2::before {
    content: "Quarto 3 Luxo";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card7 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-standard-1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card7 h2::before {
    content: "Quarto 1 Standard";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card8 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-standard-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card8 h2::before {
    content: "Quarto 2 Standard";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card9 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-standard-3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card9 h2::before {
    content: "Quarto 3 Standard";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}
</style>