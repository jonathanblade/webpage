<template>
  <section id="publications">
    <h3>Публикации</h3><hr>
    <ul class="list-unstyled text-center">
      <a href="" onclick="return false;">
        <MDBBadge @click="publicationCategory = 'all'" :class="{ 'bg-primary': publicationCategory == 'all', 'text-light': publicationCategory == 'all', 'text-dark': publicationCategory != 'all' }" pill>Все</MDBBadge>
      </a>
      <a href="" onclick="return false;">
        <MDBBadge @click="publicationCategory = 'article'" :class="{ 'bg-primary': publicationCategory == 'article', 'text-light': publicationCategory == 'article', 'text-dark': publicationCategory != 'article' }" pill>Журнальные статьи</MDBBadge>
      </a>
      <a href="" onclick="return false;">
        <MDBBadge @click="publicationCategory = 'proceedings'" :class="{ 'bg-primary': publicationCategory == 'proceedings', 'text-light': publicationCategory == 'proceedings', 'text-dark': publicationCategory != 'proceedings' }" pill>Труды конференций</MDBBadge>
      </a>
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
