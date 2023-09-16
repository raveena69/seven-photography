<template>
  <div class="footer-container">
    <div class="upper-footer-container">
      <div class="container">
        <div class="">
          <p class="contact-us">Contact us</p>
          <div class="">
            <div class="my-1">
              <i class="fa fa-phone-square text-white" aria-hidden="true"></i>
              <span class="mx-3 text-white">|</span>
              <i class="fa fa-whatsapp mx-0 text-white" aria-hidden="true"></i>
            </div>
            <h2 class="phone-number">+(94) 70 155 0547</h2>
          </div>
          <p class="terms-and-conditions">Terms and Conditions Apply</p>
        </div>

        <div class="row mt-md-5">
          <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <h2 class="email">Email</h2>

            <div class="col d-flex justify-content-center">
              <i class="fa fa-envelope mx-2 mt-0 text-white" aria-hidden="true"></i>
              <p class="email-data">tharushayasas7@gmail.com</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 my-4">
            <h2 class="social">Social</h2>
            <i class="fa fa-facebook-square mr-2 text-white" aria-hidden="true"></i>
            <a
              href="https://web.facebook.com/profile.php?id=100092010139641"
              target="_blank"
              class="facebook"
              >Facebook
              <span class="mx-3">|</span>
            </a>

            <i class="fa fa-instagram mr-2 text-white" aria-hidden="true"></i>
            <a
              href="https://www.instagram.com/Seven_Photography_07/?fbclid=IwAR06GLC9kc53pF8VAEremzaVtlvpKIIUiT5VF3cjS2SPNjEYdXX51jd1yB0"
              target="_blank"
              class="instagram"
              >Instagram</a
            >
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <h2 class="location">Location based on</h2>

            <div class="col d-flex justify-content-center">
              <i class="fa fa-map-marker mx-2 mt-0 text-white" aria-hidden="true"></i>
              <p class="location-data">Colombo, Kandy, Galle, Matara</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lower-footer-container">
      <h2 class="all-right-reserved">
        All Rights Reserved. © 2023
        <a
          href="https://www.linkedin.com/in/raveena-amarasiriwardena/"
          target="_blank"
          class="linkedin-url"
          >RaveenaAmarasiriwardena</a
        >
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomFooter",
};
</script>

<style scoped>
.upper-footer-container {
  padding: 40px 0;
  background: #15273c;
}
.lower-footer-container {
  padding: 10px 0;
  background: #0f1c2c;
}

.contact-us {
  color: #0074fc;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
}

.phone-number {
  color: #e7e7e7;
  font-family: Open Sans;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 58px;
}

.terms-and-conditions {
  color: #e7e7e7;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  text-transform: capitalize;
  text-decoration: underline;
  margin-top: 40px;
}

.terms-and-conditions:hover {
  text-decoration: none;
}

.email,
.social,
.location {
  color: #fff;
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  text-transform: uppercase;
}

.email-data,
.location-data {
  color: #e7e7e7;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-decoration: none;
}
.facebook,
.instagram {
  color: #e7e7e7;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-decoration: none;
  margin-left: 10px;
}

.all-right-reserved,
.linkedin-url {
  color: #fff;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

@media screen and (min-width: 280px) {
  .phone-number {
    font-size: 28px;
  }

  .terms-and-conditions {
    margin-top: 0;
  }

  .all-right-reserved,
  .linkedin-url {
    color: #fff;
    font-family: "Open Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-decoration: none;
  }

  .linkedin-url:hover {
    text-decoration: underline;
  }
}

@media screen and (min-width: 390px) {
  .all-right-reserved,
  .linkedin-url {
    color: #fff;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 840px;
  }
  .phone-number {
    font-size: 36px;
  }
  .terms-and-conditions {
    margin-top: 20px;
  }
}

@media screen and (min-width: 992px) {
  .container {
    max-width: 1320px;
  }
}
</style>
