<template>
  <div class="container">
    <div class="about-me-container">
      <div class="row">
        <div
          class="profile-image col-lg-6 col-md-12 col-sm-12"
          style="background-image: url('images/tharusha1.jpg')"
        ></div>

        <div class="col-lg-6 col-md-12 col-sm-12 content-container">
          <p class="about-me-sub-title">About Me</p>
          <h2 class="about-me-main-title">I am ready to capture your best moments</h2>
          <p class="para">
            <!-- "Welcome to the SEVEN Photography" -->
            <br />
            Hello Everyone !!! I am Tharusha Amarasiriwardena. <br />
            Through the lens, I capture the moments that words cannot express and the
            beauty that often goes unnoticed. Join me on a visual journey where pixels
            tell stories, emotions are frozen in time, and ordinary scenes are transformed
            into extraordinary art.

            <br />
            <br />
            With a passion for my goal is to transport you into the heart of my
            photographic vision. Each click of the shutter is an invitation to see the
            world from a new perspective, to feel its emotions, and to appreciate its
            intricacies. Whether you're an art enthusiast, fellow photographer, or simply
            someone who appreciates the magic of photography, I invite you to explore my
            portfolio. Let's embark on this visual odyssey together and discover the
            beauty that surrounds us, one frame at a time." Feel free to personalize and
            adapt this introduction to best represent your unique style and approach to
            photography.
          </p>

          <router-link to="/my-work" class="explore-my-work-wrapper">
            <a href="#" class="button-wrapper">
              <span class="mx-2">Explore my work</span>
              <fa icon="circle-arrow-right" class="mx-2" />
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.profile-image {
  width: 50%;
  height: 668px;
  border-radius: 10px;
  background-size: cover;
}

.about-me-container {
  margin: 100px 0;
}

.para {
  color: #5c5c5c;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
}

.about-me-sub-title {
  color: #0074fc;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
}

.about-me-main-title {
  color: #000;
  font-family: "Open Sans";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 58px;
  text-align: left;
}

.content-container {
  padding: 40px 60px;
}

.button-wrapper {
  border-radius: 10px;
  background: #000;
  color: white;
  color: #fff;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 15px;
  text-decoration: none;
}

.explore-my-work-wrapper {
  text-decoration: none;
  margin-top: 20px;
}
.button-wrapper:hover {
  background: #0074fc;
}

@media screen and (min-width: 390px) {
  .about-me-container {
    margin: 20px 0;
  }

  .profile-image {
    width: 99%;
    height: 668px;
    border-radius: 10px;
    background-size: cover;
    margin: 30px 0 30px 0;
  }

  .para {
    line-height: 32px;
    text-align: center;
    margin-bottom: 50px;
  }

  .about-me-main-title,
  .about-me-sub-title {
    text-align: center;
  }
}

@media screen and (min-width: 768px) {
  .para,
  .about-me-main-title,
  .about-me-sub-title {
    text-align: center;
  }
}

@media screen and (min-width: 992px) {
  .para {
    text-align: left;
    margin-bottom: 20px;
  }

  .about-me-main-title,
  .about-me-sub-title {
    text-align: left;
  }

  .about-me-container {
    margin: 120px 0;
  }

  .content-container {
    padding: 70px 60px;
    display: flex;
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .profile-image {
    width: 50%;
    height: 860px;
    border-radius: 10px;
    background-size: cover;
  }
}
</style>
