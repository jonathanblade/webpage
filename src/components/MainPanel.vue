<template>
  <div class="sticky-top" style="top: 1.5rem;">
    <img class="w-25 rounded-circle" src="../assets/me.png">
    <p class="mt-4"><b>Семён Сыроватский</b></p>
    <p>Аспирант физического факультета МГУ имeни М.В. Ломоносова.</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="https://vk.com/id34885502" target="_blank"><small>Вконтакте</small></a></li>
      <li class="list-inline-item"><a href="https://t.me/jonathanblade" target="_blank"><small>Telegram</small></a></li>
      <li class="list-inline-item"><a href="https://github.com/jonathanblade" target="_blank"><small>Github</small></a></li>
      <li class="list-inline-item"><a href="mailto:mail@syrovatskiy.tk"><small>Почта</small></a></li>
    </ul>
    <ul class="nav flex-column">
      <router-link class="mainpanel-nav-link" active-class="mainpanel-nav-link-active" :to="{ name: 'Home' }">Главная</router-link>
      <router-link class="mainpanel-nav-link" active-class="mainpanel-nav-link-active" :to="{ name: 'CV' }">Резюме</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPanel'
};
</script>

<style>
.mainpanel-nav-link {
  border-left: 5px solid white;
  padding: 0.7rem;
  color: #6c757d;
  text-decoration: none;
}
.mainpanel-nav-link:hover {
  color: black;
  text-decoration: none;
}
.mainpanel-nav-link-active {
  border-left: 5px solid black;
  color: black;
  background-color: #f8f9fa;
}
</style>
