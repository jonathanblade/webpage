<template>
  <div class="sticky-top" style="top: 1rem;">
    <div class="d-none d-lg-block">
      <ul class="nav flex-column nav-pills menu-sidebar" v-mdb-scrollspy="scrollspy">
        <li class="nav-item"><a class="nav-link" href="#education">Образование</a></li>
        <li class="nav-item"><a class="nav-link" href="#work-experience">Опыт работы</a></li>
        <li class="nav-item"><a class="nav-link" href="#publications">Публикации</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mdbScrollspy } from 'mdb-vue-ui-kit';

export default {
  name: 'Scrollspy',
  directives: {
    mdbScrollspy
  }
};
</script>
