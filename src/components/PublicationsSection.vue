<template>
  <section id="publications">
    <h3>Публикации</h3><hr>
    <ul class="list-unstyled">
      <li v-for="item in publicationsData">
        <PublicationItem :item="item"/>
      </li>
    </ul>
  </section>
</template>

<script>
import PublicationItem from '@/components/PublicationItem.vue';
import publicationsData from '@/assets/publications.json';

export default {
  name: 'PublicationsSection',
  components: {
    PublicationItem
  },
  data: () => ({
    publicationsData: publicationsData
  })
};
</script>
