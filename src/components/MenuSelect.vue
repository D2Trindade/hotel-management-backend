<template>
  <select name="assuntos_opt" id="assuntos_opt" class="input-padrao p-primario">
    <option value="">{{opt00}}</option>
    <option value="">{{opt01}}</option>
    <option value="">{{opt02}}</option>
    <option value="">{{opt03}}</option>
  </select>
</template>

<script>
export default {
  name: 'MenuSelect',
  props: {
    opt00: String,
    opt01: String,
    opt02: String,
    opt03: String,
    valor: String,
    id: String
  }
}
</script>

<!-- 
    <option value="null_opc">{{opt00}}</option>
    <option value="cancelamento">{{opt01}}</option>
    <option value="financeiro">{{opt02}}</option>
    <option value="ouvidoria">{{opt03}}</option>
 -->