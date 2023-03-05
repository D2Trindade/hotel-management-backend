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

<style>
#card91 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-presidencial-1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card91 h2::before {
    content: "Quarto 1 Presidencial";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card92 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-presidencial-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card92 h2::before {
    content: "Quarto 2 Presidencial";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card93 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-presidencial-3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card93 h2::before {
    content: "Quarto 3 Presidencial";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card81 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-luxo-1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card81 h2::before {
    content: "Quarto 1 Luxo";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card82 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-luxo-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card82 h2::before {
    content: "Quarto 2 Luxo";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card83 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-luxo-3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card83 h2::before {
    content: "Quarto 3 Luxo";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card71 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-standard-1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card71 h2::before {
    content: "Quarto 1 Standard";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card72 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-standard-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card72 h2::before {
    content: "Quarto 2 Standard";
    display: block;
    background-color: rgba(33, 50, 66, 0.4);
    color: #e1c888;
    font: "Quicksand";
    text-align: center;
    padding-top: 0;
    margin-top: 5vh;
}

#card73 {
    background-image: url(@/assets/images/acomodacoes/acomodacoes-standard-3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#card73 h2::before {
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