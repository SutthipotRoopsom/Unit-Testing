<template>
  <div class="htmlClass">
    <!-- <h1>{{ head }}</h1> -->
    <h1>{{ FirstName }}</h1>
    <h2>{{ SurName }}</h2>
    <h3>{{ NickName }}</h3>
    <h4>{{ StuCode }}</h4>
    <!-- <form>
      <button @click="submitForm()" class="submitForm">Submit</button>
  </form> -->
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      // head: 'Vue is awesome.',
      FirstName: 'สุทธิพจน์',
      SurName: 'รูปโสม',
      NickName:'ตะวัน',
      StuCode:'6604101391'
    }
  },

}
</script>

<style scoped></style>
