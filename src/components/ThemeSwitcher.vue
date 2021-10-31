<template>
  <div class="text-center text-warning">
    <div class="d-inline-block">
      <i id="light-mode-icon" class="fas fa-sun mx-2"></i>
    </div>
    <div class="d-inline-block"><MDBSwitch v-model="themeSwitcher" /></div>
    <div class="d-inline-block">
      <i id="dark-mode-icon" class="fas fa-moon"></i>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { MDBSwitch } from "mdb-vue-ui-kit";

export default {
  name: "ThemeSwitcher",
  components: {
    MDBSwitch,
  },
  setup() {
    const storageTheme = localStorage.getItem("isDarkTheme");
    const themeSwitcher = ref(
      storageTheme ? JSON.parse(storageTheme) : undefined
    );
    const setColorTheme = (isDarkTheme) => {
      if (isDarkTheme) {
        document.documentElement.classList.add("tw-dark");
        document
          .getElementById("dark-mode-icon")
          .classList.remove("text-muted");
        document.getElementById("light-mode-icon").classList.add("text-muted");
      } else {
        document.documentElement.classList.remove("tw-dark");
        document.getElementById("dark-mode-icon").classList.add("text-muted");
        document
          .getElementById("light-mode-icon")
          .classList.remove("text-muted");
      }
    };
    onMounted(() => setColorTheme(themeSwitcher.value));
    watch(
      () => themeSwitcher.value,
      (value) => {
        setColorTheme(value);
        localStorage.setItem("isDarkTheme", value);
      }
    );
    return {
      themeSwitcher,
    };
  },
};
</script>
