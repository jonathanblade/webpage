<template>
  <div class="sticky-top" style="top: 1.5rem">
    <div class="d-none d-lg-flex">
      <ul
        v-mdb-scrollspy="scrollspy"
        class="nav flex-column nav-pills menu-sidebar"
      >
        <li class="nav-item">
          <a class="nav-link" href="#education">Образование</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#work-experience">Опыт работы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Проекты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#publications">Публикации</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mdbScrollspy } from "mdb-vue-ui-kit";

export default {
  name: "Scrollspy",
  directives: {
    mdbScrollspy,
  },
};
</script>

<style>
.nav-link {
  color: #757575 !important;
}
.nav-link.active,
.nav-link:focus {
  color: #1266f1 !important;
}
</style>
