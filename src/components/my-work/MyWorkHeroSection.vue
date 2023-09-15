<template>
  <div class="hero-container">
    <div class="row">
      <div class="col-md-12">
        <div class="">
          <img
            class="img-fluid w-100"
            src="images/hero-image2.png"
            alt=""
            style="object-fit: cover"
          />
        </div>
        <!-- /lc-block -->
      </div>
      <!-- /col -->
    </div>

    <div class="container">
      <div class="hero-container-content row align-items-center">
        <div class="col-lg-5 col-md-6 col-sm-6 mb-lg-0">
          <div class="lc-block mb-3 mb-md-5 lh-1">
            <div editable="rich">
              <h1 class="main-title">My Work <br />Hope You Enjoy !</h1>
            </div>
          </div>
          <!-- <div class="lc-block">
                        <a class="btn btn-lg btn-dark" href="#" role="button">More Info</a>
                    </div> -->
        </div>
        <div class="col-lg-7 col-md-6 col-sm-6">
          <div class="lc-block px-md-4 px-lg-5 lh-lg">
            <div editable="rich">
              <p class="paragraph">
                It's incredible how photography can catch even a fleeting glimpse of
                something beautiful. Anyone who looks closely will notice that photography
                is a record of your life.

                <br />
                <!-- Although there is beauty everywhere, recognizing and composing it is what
                distinguishes a snapshot from a photograph. -->
                <br />
                Photographs preserve an irreplaceable moment that can never be recreated.
                Photography is a form of observational art. It involves discovering
                something intriguing in an unremarkable environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyWorkHeroSection",
};
</script>

<style scoped>
.main-title {
  color: #000;
  font-family: "Open Sans";
  font-size: 58px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  line-height: 66px;
}
.paragraph {
  color: #5c5c5c;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
}

@media screen and (min-width: 280px) {
  .img-fluid {
    height: 250px;
  }

  .main-title {
    font-size: 36px;
    text-align: center;
    padding: 20px 10px;
  }

  .paragraph {
    text-align: center;
    line-height: 32px;
    padding: 10px 50px;
  }
}

@media screen and (min-width: 390px) {
  .img-fluid {
    height: 250px;
  }

  .main-title {
    font-size: 48px;
    text-align: center;
    padding: 20px 10px;
  }

  .paragraph {
    text-align: center;
    line-height: 32px;
    padding: 10px 50px;
  }
}

@media screen and (min-width: 768px) {
  .hero-container {
    margin: 0 0 120px 0;
  }

  .img-fluid {
    height: auto;
  }

  .main-title {
    text-align: left;
    padding: 40px 0;
  }

  .paragraph {
    text-align: left;
    padding: 24px 10px 10px 10px;
  }

  .hero-container-content {
    margin: 10px 0 0 0;
  }
}

@media screen and (min-width: 992px) {
  .hero-container-content {
    margin: 40px 0 0 0;
  }
}
</style>
