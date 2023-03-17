<template>
  <textarea name="textArea" id="textArea" class="textArea-padrao" cols="60" rows="10"></textarea>
</template>

<script>
export default {
  name: 'TextArea'
}
</script>

<style scoped>
.textArea-padrao {
  border: white solid 1px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 1px 3px 5px #213242;
  width: 100%;
  padding: 10px;
}
</style>