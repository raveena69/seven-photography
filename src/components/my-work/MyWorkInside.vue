<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">
                        <img src="/images/seven-logo.png" alt="Logo" width="40" height="34" class="d-inline-block align-text-top">
                      </a> -->
        <a class="navbar-brand" href="#">Seven Photography</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-white text-left"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <b>Seven Photography</b>
            </h5>
            <button
              type="button"
              class="btn-close btn-close-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">My Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/my-work">My Work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contactUs">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- My Work Hero section start -->
    <my-work-hero-section></my-work-hero-section>
    <!-- My Work Hero section start -->

    <!-- Galle Images section start -->
    <galle-images></galle-images>
    <!-- Galle Images section start -->

    <!-- Nuwara-Eliya section start -->
    <nuwara-eliya></nuwara-eliya>
    <!-- Nuwara-Eliya section start -->

    <!-- Personal Photography section start -->
    <personal-photography></personal-photography>
    <!-- Personal Photography section start -->

    <!-- Personal Photography 1 section start -->
    <personal-photography-1></personal-photography-1>
    <!-- Personal Photography 1 section start -->

    <!-- Personal Photography 2 section start -->
    <personal-photography-2></personal-photography-2>
    <!-- Personal Photography 2 section start -->

    <!-- Personal Photography section start -->
    <bottom-footer id="contactUs"></bottom-footer>
    <!-- Personal Photography section start -->
  </div>
</template>

<script>
import GalleImages from "./GalleImages.vue";
import MyWorkHeroSection from "./MyWorkHeroSection.vue";
import NuwaraEliya from "./NuwaraEliya.vue";
import PersonalPhotography from "./PersonalPhotography.vue";
import PersonalPhotography1 from "./PersonalPhotography1.vue";
import PersonalPhotography2 from "./PersonalPhotography2.vue";
import BottomFooter from "../BottomFooter.vue";

export default {
  components: {
    MyWorkHeroSection,
    GalleImages,
    NuwaraEliya,
    PersonalPhotography,
    PersonalPhotography1,
    PersonalPhotography2,
    BottomFooter,
  },

  name: "MyWorkInside",
};
</script>

<style scoped>
.navbar-brand {
  color: #000;
  font-family: Open Sans;
  font-size: 28px;
  font-weight: 700;
}

.nav-item {
  color: #000;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
}

.nav-link {
  text-align: left;
}

.navbar-nav .nav-link.active {
  color: #0a5cc2;
  font-weight: 700;
}

.nav-link {
  color: #868b91;
  font-weight: 400;
}

.offcanvas-title {
  font-family: Open Sans;
}

@media screen and (min-width:  280px) {
  .navbar-brand {
    font-size: 18px;
  }
}

@media screen and (min-width: 768px) {
  .navbar-brand {
    font-size: 24px;
  }
}
</style>
