<template>
  <div class="sticky-top" style="top: 1.5rem;">
    <ThemeSwitcher/>
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
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

export default {
  name: 'MainPanel',
  components: {
    ThemeSwitcher
  }
};
</script>

<style>
.mainpanel-nav-link {
  border-left: 5px solid transparent;
  padding: 0.7rem;
}
.mainpanel-nav-link-active {
  border-left: 5px solid orange;
  padding: 0.7rem;
}
</style>
