<template>
  <ul class="list-inline text-center">
    <li class="list-inline-item px-2"><LightThemeIcon/></li>
    <li class="list-inline-item"><MDBSwitch v-model="themeSwitcher"/></li>
    <li class="list-inline-item"><DarkThemeIcon/></li>
  </ul>
</template>

<script>
import { ref, watch } from 'vue';
import { MDBSwitch } from 'mdb-vue-ui-kit';
import LightThemeIcon from '@/components/LightThemeIcon';
import DarkThemeIcon from '@/components/DarkThemeIcon';

export default {
  name: 'ThemeSwitcher',
  components: {
    MDBSwitch,
    LightThemeIcon,
    DarkThemeIcon
  },
  setup() {
    const lightTheme = 'css/mdb.min.css';
    const darkTheme = 'css/mdb.dark.min.css';
    const storageTheme = localStorage.getItem('isDarkTheme');
    const colorThemeLink = document.getElementById('color-theme-link');
    const themeSwitcher = ref(storageTheme ? JSON.parse(storageTheme).value : undefined);
    const enableDarkTheme = () => {
      colorThemeLink.setAttribute('href', darkTheme);
      document.body.style.color = 'white';
    };
    const enableLightTheme = () => {
      colorThemeLink.setAttribute('href', lightTheme);
      document.body.style.color = 'black';
    };
    const switchColorTheme = (isDarkTheme) => {
      if (isDarkTheme) {
        enableDarkTheme();
      } else {
        enableLightTheme();
      }
    };
    switchColorTheme(themeSwitcher.value);
    watch(
      () => themeSwitcher.value,
      value => {
        switchColorTheme(value);
        localStorage.setItem('isDarkTheme', JSON.stringify({ value }));
      }
    );
    return {
      themeSwitcher
    }
  }
};
</script>
