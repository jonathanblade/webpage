<template>
  <MDBContainer fluid>
    <MDBRow center>
      <router-view/>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import { MDBContainer, MDBRow } from 'mdb-vue-ui-kit';

export default {
  name: 'App',
  components: {
    MDBContainer,
    MDBRow
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');

#app {
  font-family: 'Ubuntu Condensed', sans-serif;
  color: black;
}
a {
  font-weight: bold;
}
</style>
