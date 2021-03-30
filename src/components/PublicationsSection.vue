<template>
  <section id="publications">
    <h3>Публикации</h3><hr>
    <ul class="list-unstyled">
      <li v-for="item in data">
        <PublicationItem :item="item"/>
      </li>
    </ul>
  </section>
</template>

<script>
import PublicationItem from '@/components/PublicationItem.vue';
import publicationsData from '@/assets/publications.json';

export default {
  name: 'Publications',
  components: {
    PublicationItem
  },
  data() {
    return {
      data: publicationsData
    };
  }
};
</script>
