<template>
  <section id="projects">
    <h3>Проекты</h3>
    <hr />
    <MDBRow>
      <MDBCol sm="12" md="6">
        <ProjectCard
          :project-img="rotiImg"
          project-title="IGS ROTI Maps"
          project-link="https://igs-roti.herokuapp.com"
          project-bio="Web tool for visualization of the IGS ROTI Maps product."
        />
      </MDBCol>
      <MDBCol sm="12" md="6">
        <ProjectCard
          :project-img="omronjsImg"
          project-title="OmronJS"
          project-link="https://www.npmjs.com/package/@jonathanblade/omronjs"
          project-bio="Node.js wrapper for libomron."
        />
      </MDBCol>
    </MDBRow>
  </section>
</template>

<script>
import { MDBRow, MDBCol } from "mdb-vue-ui-kit";
import ProjectCard from "@/components/ProjectCard.vue";
import rotiImg from "@/assets/ROTI.png";
import omronjsImg from "@/assets/omronjs.png";

export default {
  name: "ProjectsSection",
  components: {
    MDBRow,
    MDBCol,
    ProjectCard,
  },
  data() {
    return {
      rotiImg: rotiImg,
      omronjsImg: omronjsImg,
    };
  },
};
</script>
