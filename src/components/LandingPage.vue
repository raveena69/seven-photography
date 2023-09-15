<template>
  <div>
    <!-- Hero section start -->
    <hero-section></hero-section>
    <!-- Hero section end -->

    <!-- About Me section start -->
    <about-me></about-me>
    <!-- About Me end -->

    <!-- My Services section start -->
    <my-services></my-services>
    <!-- My Services end -->

    <!-- My Work section start -->
    <my-work></my-work>
    <!-- My Work section start -->
  </div>
</template>

<script>
import AboutMe from "./AboutMe.vue";
import HeroSection from "./HeroSection.vue";
import MyServices from "./MyServices.vue";
import MyWork from "./MyWork.vue";

export default {
  components: { HeroSection, AboutMe, MyServices, MyWork },

  name: "LandingPage",
};
</script>

<style scoped>

</style>
