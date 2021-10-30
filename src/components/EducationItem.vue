<template>
  <div class="mb-4">
    <ul class="list-inline">
      <li class="list-inline-item">
        <h5>{{ item.degree }}</h5>
      </li>
      <li class="list-inline-item float-end text-muted">
        <small>{{ item.start }} - {{ item.end }}</small>
      </li>
    </ul>
    {{ item.university }}, {{ item.faculty }}<br />
    <small>
      Специальность<br />
      <span class="text-muted"
        >{{ item.specialization.code }} {{ item.specialization.name }}</span
      ><br />
      Направление<br />
      <span class="text-muted">{{ item.program }}</span
      ><br />
      Дипломная работа<br />
      <a :href="item.diploma.href" target="_blank">{{ item.diploma.title }}</a>
    </small>
  </div>
</template>

<script>
export default {
  name: "EducationItem",
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>
