<template>
  <div class="hero-container">
    <div class="row">
      <div class="col-md-12">
        <div class="">
          <img
            class="img-fluid w-100"
            src="images/hero-image1.png"
            alt=""
            style="object-fit: cover"
          />
        </div>
        <!-- /lc-block -->
      </div>
      <!-- /col -->
    </div>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 col-xl-7 mb-lg-0">
          <div class="lc-block mb-3 mb-md-5 lh-1">
            <div editable="rich">
              <h1 class="main-title">
                It’s all about Capturing moments and Creating memories
              </h1>
            </div>
          </div>
          <!-- <div class="lc-block">
                        <a class="btn btn-lg btn-dark" href="#" role="button">More Info</a>
                    </div> -->
        </div>
        <div class="col-12 col-md-6 col-xl-5">
          <div class="lc-block px-md-4 px-lg-5 lh-lg">
            <div editable="rich">
              <p class="paragraph">
                A excellent photograph conveys information, moves the viewer's emotions,
                and changes them as a result of being seen. In a single word, it is
                efficient.

                <br />
                <!-- Although there is beauty everywhere, recognizing and composing it is what
                distinguishes a snapshot from a photograph. -->
                <br />
                I love the people, who I capture through my camera. They are, after all,
                my closest companions. Although I have never met or know very little about
                most of them, I appear to be living with them in the image.
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
  name: "HeroSection",
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
    padding: 10px 30px;
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
    padding: 30px 10px 10px 10px;
  }
}
</style>
