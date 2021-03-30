<template>
  <h5>{{ item.degree }}</h5>
  <div class="mb-4">
    {{ item.university }}, {{ item.faculty }}<br>
    <small>
      Специальность<br>
      <span class="text-muted">{{ item.specialization.code }} {{ item.specialization.name }}</span><br>
      Направление<br>
      <span class="text-muted">{{ item.program }}</span><br>
      Дипломная работа<br>
      <a :href="item.diploma.href" target="_blank">{{ item.diploma.title }}</a>
    </small>
  </div>
</template>

<script>
export default {
  name: 'EducationItem',
  props: ['item']
};
</script>
