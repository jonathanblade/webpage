<template>
  <MDBCard
    class="mb-3 hover-shadow"
    border="#e0e0e0"
    style="background-color: transparent"
  >
    <MDBCardImg :src="projectImg" />
    <MDBCardHeader style="border-bottom: 1px solid #e0e0e0 !important">
      <a :href="projectLink" class="stretched-link" target="_blank">{{
        projectTitle
      }}</a>
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardText>{{ projectBio }}</MDBCardText>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardImg,
} from "mdb-vue-ui-kit";

export default {
  name: "ProjectCard",
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardText,
    MDBCardImg,
  },
  props: {
    projectTitle: {
      type: String,
      default: "",
    },
    projectLink: {
      type: String,
      default: "",
    },
    projectBio: {
      type: String,
      default: "",
    },
    projectImg: {
      type: String,
      default: "",
    },
  },
};
</script>
