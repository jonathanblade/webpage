<template>
  <section id="publications">
    <h3>Публикации</h3><hr>
    <ul class="list-unstyled text-center">
      <li class="publication-category">
        <MDBBadge @click="publicationCategory = 'all'" :class="{ 'bg-warning': publicationCategory == 'all', 'text-light': publicationCategory == 'all', 'text-muted': publicationCategory != 'all' }" pill>Все</MDBBadge>
      </li>
      <li class="publication-category">
        <MDBBadge @click="publicationCategory = 'article'" :class="{ 'bg-warning': publicationCategory == 'article', 'text-light': publicationCategory == 'article', 'text-muted': publicationCategory != 'article' }" pill>Журнальные статьи</MDBBadge>
      </li>
      <li class="publication-category">
        <MDBBadge @click="publicationCategory = 'proceedings'" :class="{ 'bg-warning': publicationCategory == 'proceedings', 'text-light': publicationCategory == 'proceedings', 'text-muted': publicationCategory != 'proceedings' }" pill>Труды конференций</MDBBadge>
      </li>
    </ul>
    <ul class="list-unstyled">
      <li v-for="item in filteredPublications">
        <PublicationItem :item="item"/>
      </li>
    </ul>
  </section>
</template>

<script>
import { MDBBadge } from 'mdb-vue-ui-kit';
import PublicationItem from '@/components/PublicationItem.vue';
import publications from '@/assets/publications.json';

export default {
  name: 'PublicationsSection',
  components: {
    MDBBadge,
    PublicationItem
  },
  data() {
    return {
      publications: publications,
      publicationCategory: 'all'
    }
  },
  computed: {
    filteredPublications() {
      if (this.publicationCategory === 'all') {
        return this.publications;
      } else {
        return this.publications.filter((publication) => {
          return publication.category === this.publicationCategory;
        });
      }
    }
  }
};
</script>

<style>
.publication-category {
  display: inline;
  cursor: pointer;
  margin-right: .25rem;
  margin-left: .25rem;
}
</style>
