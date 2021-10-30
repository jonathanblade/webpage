<template>
  <MDBCol sm="12" md="5" lg="3" class="mt-4 offset-lg-2">
    <MainPanel />
  </MDBCol>
  <MDBCol sm="12" md="6" lg="4" class="mt-4">
    <div id="scrollspy">
      <EducationSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
    </div>
  </MDBCol>
  <MDBCol lg="3" class="mt-4">
    <Scrollspy />
  </MDBCol>
</template>

<script>
import { MDBCol } from "mdb-vue-ui-kit";
import MainPanel from "@/components/MainPanel.vue";
import EducationSection from "@/components/EducationSection.vue";
import WorkExperienceSection from "@/components/WorkExperienceSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import PublicationsSection from "@/components/PublicationsSection.vue";
import Scrollspy from "@/components/Scrollspy.vue";

export default {
  name: "CV",
  components: {
    MDBCol,
    MainPanel,
    EducationSection,
    WorkExperienceSection,
    ProjectsSection,
    PublicationsSection,
    Scrollspy,
  },
};
</script>
