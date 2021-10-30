<template>
  <div class="mb-3">
    {{ item.title }}<br />
    <small class="text-muted">
      {{ item.authors }}<br />
      <a :href="item.href" target="_blank"><i class="fas fa-link"></i></a>
      {{ item.journal.name }}
      <span v-if="item.journal.volume">{{ item.journal.volume }}&nbsp;</span>
      <span v-if="item.journal.number">({{ item.journal.number }})&nbsp;</span>
      <strong>{{ item.year }}</strong>
    </small>
  </div>
</template>

<script>
export default {
  name: "PublicationItem",
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>
