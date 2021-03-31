<template>
  <MDBCol sm="12" md="5" lg="3" class="mt-4">
    <MainPanel/>
  </MDBCol>
</template>

<script>
import { MDBCol } from 'mdb-vue-ui-kit';
import MainPanel from '@/components/MainPanel.vue'

export default {
  name: 'Home',
  components: {
    MDBCol,
    MainPanel
  }
}
</script>
