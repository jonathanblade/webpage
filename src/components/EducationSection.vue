<template>
  <section id="education">
    <h3>Образование</h3><hr>
    <ul class="list-unstyled">
      <li v-for="item in educationData">
        <EducationItem :item="item" />
      </li>
    </ul>
  </section>
</template>

<script>
import EducationItem from '@/components/EducationItem.vue'
import educationData from '@/assets/education.json';

export default {
  name: 'EducationSection',
  components: { 
    EducationItem 
  },
  data: () => ({
    educationData: educationData
  })
};
</script>
