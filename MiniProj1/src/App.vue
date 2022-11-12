<template>
  <div :class="[darkMode === true ? 'dark' : '', styles]">
    <main class="bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <Header :darkMode="darkMode" v-on:changeDarkMode="updateThemeMode()" />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      darkMode: true,
      styles: "lg:overflow-hidden",
    };
  },
  methods: {
    updateThemeMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
