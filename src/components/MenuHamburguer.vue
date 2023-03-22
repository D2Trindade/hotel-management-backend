<template>
    <div class="menu-hamburguer">
        <div class="">
            <input type="checkbox" name="checkbox" id="alterna">
            <label class="hamburguer" for="alterna">
                <div class="linha"></div>
                <div class="linha"></div>
                <div class="linha"></div>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuHamburguer"
}
</script>

<style scoped>
.hamburguer {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
}

.hamburguer .linha {
    width: 50px;
    height: 3px;
    background-color: #e1c888;
    /*background-color: #213242;*/
    position: absolute;
    border-radius: 5px;
    transition: 0.3s ease-out;
}

.hamburguer .linha:nth-child(1) {
    top: 26px;
    transform: rotate(0);
}

.hamburguer .linha:nth-child(2) {
    top: 46px;
    transform: rotate(0);
}

.hamburguer .linha:nth-child(3) {
    top: 66px;
    transform: rotate(0);
}

#alterna {
    display: none;
}

#alterna:checked + .hamburguer .linha:nth-child(1) {
    transform: rotate(45deg);
    top: 47px;
}

#alterna:checked + .hamburguer .linha:nth-child(2) {
    transform:  translateX(-100px);
    width: 30px;
    visibility: hidden;
    opacity: 0;
}

#alterna:checked + .hamburguer .linha:nth-child(3) {
    transform: rotate(-45deg);
    top: 48px;
}
</style>