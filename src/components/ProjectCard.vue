<template>
  <MDBCard class="mb-3 hover-shadow" border="#6c757d">
    <MDBCardHeader>
      <a :href="projectLink" class="stretched-link" target="_blank">{{ projectTitle }}</a>
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardText>{{ projectBio }}</MDBCardText>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardText } from 'mdb-vue-ui-kit';

export default {
  name: 'ProjectCard',
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardText
  },
  props: [
    'projectTitle',
    'projectLink',
    'projectBio'
  ]
};
</script>
