<template>
  <h5>{{ item.year }}</h5>
  <ul class="list-unstyled">
    <li v-for="publication in item.publications">
      <div class="mb-4">
        {{ publication.title }}<br>
        <small class="text-muted">
          <small>{{ publication.authors }}</small><br>
          <a :href="publication.href" target="_blank"><i class="fas fa-link"></i></a>
          {{ publication.journal.name }}
          <span v-if="publication.journal.volume"><strong>{{ publication.journal.volume }}</strong></span>
          <span v-if="publication.journal.number">({{ publication.journal.number }})</span>
          <span v-if="publication.doi"> doi: <a :href="publication.doi.href" target="_blank">{{ publication.doi.raw }}</a></span>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PublicationItem',
  props: ['item']
};
</script>
