<template>
  <div>
    <div class="container">
      <div class="my-work-container">
        <div class="row">
          <p class="my-work-sub-title">My Work</p>
          <h2 class="my-work-main-title">
            Nature creates the beauty, My camera and I are the witness
          </h2>
          <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
            Gravida eu pretium lacus arcu elementum sit. Tincidunt fringilla amet volutpat
            ullamcorper posuere ac. Velit arcu purus nunc pulvinar.
          </p>
        </div>

        <div class="col-12">
          <div class="row my-4">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <!-- Image start -->
              <!--<img src="images/galle1.jpg" class="image1" />-->
                <div class="image1" style="background-image: url('images/galle1.jpg');"></div>

              <h2 class="image-main-title">Galle Fort</h2>

              <p class="image-sub-title">
                Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
              </p>
              <!-- Image end -->
            </div>

            <div class="col-lg-4 col-md-12 col-sm-12">
              <!-- Image start -->
              <!--<img src="images/nuwara-eliya3.jpg" class="image2" />-->
                <div class="image2" style="background-image: url('images/nuwara-eliya3.jpg');"></div>

              <h2 class="image-main-title">Nuwara Eliya</h2>

              <p class="image-sub-title">
                Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
              </p>
              <!-- Image end -->
            </div>

            <div class="col-lg-4 col-md-12 col-sm-12">
              <!-- Image start -->
              <!--<img src="images/friend1.jpg" class="image3 hover:grayscale" />-->
                <div class="image3" style="background-image: url('images/friend1.jpg');"></div>

              <h2 class="image-main-title">Model Photography</h2>

              <p class="image-sub-title">
                Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
              </p>
              <!-- Image end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyWork",
};
</script>

<style scoped>
.my-work-sub-title {
  color: #0074fc;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
}

.my-work-main-title {
  color: #000;
  font-family: "Open Sans";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 58px;
}

.paragraph {
  color: #5c5c5c;
  text-align: center;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 10px 60px;
}

.my-work-container {
  margin: 40px 50px;
}

.image-main-title{
    color: #000;
    text-align: center;
    font-family: Open Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
}

.image-sub-title{
    color: #5C5C5C;
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

  .my-work-main-title {
    font-size: 47px;
  }

    .image1 {
        width: 100%;
        height: 370px;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image2 {
        width: 100%;
        height: 370px;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image3 {
        width: 100%;
        height: 370px;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image1:hover, .image2:hover, .image3:hover{
        filter: grayscale(0);
    }

    .image-main-title {
        text-align: center;
        margin-top: 20px;
        padding-left: 5px;
    }

    .image-sub-title {
        text-align: center;
        padding-left: 5px;
        margin-bottom: 40px;
    }
}

@media screen and (min-width: 768px) {
  .paragraph {
    padding: 10px 60px;
  }

  .my-work-main-title {
    font-size: 50px;
  }

  .my-work-container {
    margin: 140px 60px;
  }

    .image1 {
        width: 100%;
        height: 570px;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image2 {
        width: 100%;
        height: 570px;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image3 {
        width: 100%;
        height: 570px;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image1:hover, .image2:hover, .image3:hover {
        filter: grayscale(0);
    }
}

@media screen and (min-width: 992px) {


    .image1 {
        width: 392px;
        height: 570px;
        border-radius: 20px 0px 0px 20px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image2 {
        width: 392px;
        height: 570px;
        background-size: cover;
        border-radius: 0;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image3 {
        width: 392px;
        height: 570px;
        border-radius: 0px 20px 20px 0px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1);
    }

    .image1:hover, .image2:hover, .image3:hover{
        filter: grayscale(0);
    }

    .image-main-title {
        text-align: left;
        margin-top: 20px;
        padding-left: 5px;
    }

    .image-sub-title {
        text-align: left;
        padding-left: 5px;
        margin-bottom: 20px;
    }
}
</style>
