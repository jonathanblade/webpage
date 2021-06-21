<template>
  <MDBCard class="mb-3" border="dark" shadow="0" bg="white">
    <MDBCardHeader>
      <a :href="projectLink" target="_blank">{{ projectTitle }}</a>
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardText>{{ projectBio }}</MDBCardText>
    </MDBCardBody>
    <MDBCardFooter class="text-end">
      <a :href="githubLink" target="_blank"><MDBIcon icon="github" iconStyle="fab" /></a>
    </MDBCardFooter>
  </MDBCard>
</template>

<script>
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBCardFooter, MDBIcon } from 'mdb-vue-ui-kit';

export default {
  name: 'ProjectCard',
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardText,
    MDBCardFooter,
    MDBIcon
  },
  props: [
    'projectTitle',
    'projectLink',
    'projectBio',
    'githubLink'
  ]
};
</script>
