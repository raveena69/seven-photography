<template>
  <div class="container">
    <div class="image-gallery-container">
      <div class="row">
        <h2 class="image-main-title">Model Photography</h2>
        <p class="image-sub-title">Talant : Nethmi Nimansha</p>
      </div>

      <!-- Gallery -->
      <div class="row px-0">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <img
            src="/images/personal-photography-3/personal_photography_person3-4.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
          <img
            src="/images/personal-photography-3/personal_photography_person3-7.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <img
            src="/images/personal-photography-3/personal_photography_person3-11.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
          <img
            src="/images/personal-photography-3/personal_photography_person3-8.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 col-md-6 md-row mb-4 mb-lg-0 bo">
          <img
            src="/images/personal-photography-3/personal_photography_person3-5.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
          <img
            src="/images/personal-photography-3/personal_photography_person3-13.jpg"
            class="w-100 shadow-1-strong rounded mb-4 last-image"
            alt=""
          />
        </div>

        <div class="col-lg-4 col-md-6 md-row mb-4 mb-lg-0">
          <img
            src="/images/personal-photography-3/personal_photography_person3-13.jpg"
            class="w-100 shadow-1-strong rounded mb-4 last-image1"
            alt=""
          />
        </div>
      </div>

      <p class="image-sub-title">
        All images appearing with the sign of Seven Photography are the exclusive property
        of Seven Photography Administration and are protected under International
        Copyright laws. The images may not be reproduced, copied, transmitted, or
        manipulated without legal permission. Use of any image as the basis for another
        photographic concept or illustration is a violation of International Copyright
        laws. All images are copyrighted © 2023 Seven Photography
      </p>
      <!-- Gallery -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleImages",
};
</script>

<style scoped>
.image-main-title {
  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
}

.image-sub-title {
  color: #5c5c5c;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

@media screen and (min-width: 390px) {
  .paragraph {
    padding: 10px 10px;
  }

  .image-main-title {
    font-size: 28px;
  }
  .image-sub-title {
    padding: 20px 40px 40px 40px;
    line-height: 28px;
  }
  .last-image {
    display: none;
  }

  .image-gallery-container {
    margin: 70px 20px;
  }
}

@media screen and (min-width: 768px) {
  .image-sub-title {
    padding: 20px 70px 40px 70px;
  }

  .image-main-title {
    font-size: 32px;
  }

  .last-image {
    display: none;
  }

  .last-image1 {
    display: inherit;
    height: 240px;
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .image-gallery-container {
    margin: 70px 0;
  }
}

@media screen and (min-width: 992px) {
  .paragraph {
    padding: 10px 60px;
  }

  .image-main-title {
    font-size: 36px;
  }
  .image-sub-title {
    padding: 20px 160px 40px 160px;
  }

  .last-image {
    display: inherit;
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .last-image1 {
    display: none;
  }
  .image-gallery-container {
    margin: 80px 0 70px 0;
  }
}
</style>
