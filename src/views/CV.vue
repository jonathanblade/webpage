<template>
  <MDBCol sm="12" md="5" lg="3" class="mt-3">
    <MainPanel/>
  </MDBCol>
  <MDBCol sm="12" md="6" lg="4" class="mt-3">
    <div id="scrollspy">
      <EducationSection/>
      <WorkExperienceSection/>
      <PublicationsSection/>
    </div>
  </MDBCol>
  <MDBCol lg="1" class="mt-3">
    <Scrollspy/>
  </MDBCol>
</template>

<script>
import { MDBCol } from 'mdb-vue-ui-kit';
import MainPanel from '@/components/MainPanel.vue';
import EducationSection from '@/components/EducationSection.vue';
import WorkExperienceSection from '@/components/WorkExperienceSection.vue';
import PublicationsSection from '@/components/PublicationsSection.vue';
import Scrollspy from '@/components/Scrollspy.vue';

export default {
  name: 'CV',
  components: {
    MDBCol,
    MainPanel,
    EducationSection,
    WorkExperienceSection,
    PublicationsSection,
    Scrollspy
  }
};
</script>
