<template>
  <div class="text-center">
    <div class="d-inline-block"><i class="fas fa-sun mx-2"></i></div>
    <div class="d-inline-block"><MDBSwitch v-model="themeSwitcher" /></div>
    <div class="d-inline-block"><i class="fas fa-moon"></i></div>
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
      } else {
        document.documentElement.classList.remove("tw-dark");
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
