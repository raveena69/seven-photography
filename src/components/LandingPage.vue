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
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutMe">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#myServices">My Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/my-work">My Work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contactUs">Contact Us</a>
              </li>
              <!-- <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Dropdown
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                      <li><a class="dropdown-item" href="#">About Me</a></li>
                                      <li><a class="dropdown-item" href="#">My Services</a></li>
                                      <li><a class="dropdown-item" href="#">My Work</a></li>
                                      <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                      <li>
                                        <hr class="dropdown-divider">
                                      </li>
                                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                  </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- Hero section start -->
    <hero-section></hero-section>
    <!-- Hero section end -->

    <!-- About Me section start -->
    <about-me id="aboutMe"></about-me>
    <!-- About Me end -->

    <!-- My Services section start -->
    <my-services id="myServices"></my-services>
    <!-- My Services end -->

    <!-- My Work section start -->
    <my-work id="myWork"></my-work>
    <!-- My Work section start -->

    <!-- My Work section start -->
    <bottom-footer id="contactUs"></bottom-footer>
    <!-- My Work section start -->
  </div>
</template>

<script>
import AboutMe from "./AboutMe.vue";
import HeroSection from "./HeroSection.vue";
import MyServices from "./MyServices.vue";
import MyWork from "./MyWork.vue";
import BottomFooter from "./BottomFooter.vue";

export default {
  components: { HeroSection, AboutMe, MyServices, MyWork, BottomFooter },

  name: "LandingPage",
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

@media screen and (min-width: 390px) {
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
