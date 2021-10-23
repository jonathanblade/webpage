<template>
  <MDBSwitch label="🌙" v-model="themeSwitcher"/>
</template>

<script>
import { ref, watch } from 'vue';
import { MDBSwitch } from 'mdb-vue-ui-kit';

export default {
  name: 'ThemeSwitcher',
  components: {
    MDBSwitch
  },
  setup() {
    const lightTheme = 'css/mdb.min.css';
    const darkTheme = 'css/mdb.dark.min.css';
    const storageTheme = localStorage.getItem('isDarkTheme');
    const colorThemeLink = document.getElementById('color-theme-link');
    const themeSwitcher = ref(storageTheme ? JSON.parse(storageTheme).value : undefined);
    const replaceElementsClass = (elements, oldClass, newClass) => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(oldClass);
        elements[i].classList.add(newClass);
      }
    };
    const enableDarkTheme = () => {
      colorThemeLink.setAttribute('href', darkTheme);
      setTimeout(() => {
        document.body.style.color = 'white';
        replaceElementsClass(document.getElementsByClassName('note'), 'note-light', 'note-dark');
      }, 1);
    };
    const enableLightTheme = () => {
      colorThemeLink.setAttribute('href', lightTheme);
      setTimeout(() => {
        document.body.style.color = 'black';
        replaceElementsClass(document.getElementsByClassName('note'), 'note-dark', 'note-light');
      }, 1);
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
