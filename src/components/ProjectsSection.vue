<template>
  <section id="projects">
    <h3>Проекты</h3><hr>
    <MDBRow>
      <MDBCol sm="12" md="6">
        <ProjectCard
          projectTitle="IGS ROTI Maps"
          projectLink="https://igs-roti.herokuapp.com"
          projectBio="Web tool for visualization of the IGS ROTI Maps product."
        />
      </MDBCol>
    </MDBRow>
  </section>
</template>

<script>
import { MDBRow, MDBCol } from 'mdb-vue-ui-kit';
import ProjectCard from '@/components/ProjectCard.vue'; 

export default {
  name: 'ProjectsSection',
  components: {
    MDBRow,
    MDBCol,
    ProjectCard
  }
};
</script>
