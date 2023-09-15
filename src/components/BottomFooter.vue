<template>
    <div class="footer-container">
        <div class="container">
          <div class="">
            <p class="contact-us">
              Contact us
            </p>
            <div
              class=""
            >
              <div class="">
                <i class="fa fa-phone-square mr-3 text-white" aria-hidden="true"></i> |
                <i class="fa fa-whatsapp mx-3 text-white" aria-hidden="true"></i>
              </div>
              <h2 class="phone-number">+(94) 70 155 0547</h2>
            </div>
            <p
              class="terms-and-conditions"
            >
              Terms and Conditions Apply
            </p>
          </div>

          <div class="row mt-8">

            <div class="col-lg-4 col-md-4 col-sm-12">
              <h2 class="email">Email</h2>

              <p
                class=""
              >
                tharushayasas7@gmail.com
              </p>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12">
              <h2 class="">Social</h2>
              <i class="fa fa-facebook-square mr-2 text-white" aria-hidden="true"></i>
              <a
                href="https://web.facebook.com/profile.php?id=100092010139641"
                target="_blank"
                class="text-sm leading-6 place-content-center ml-0 mr-2 text-white hover:text-white hover:underline decoration-1"
                >Facebook
                <span class="mx-3">|</span>
              </a>

              <i class="fa fa-instagram mr-2 text-white" aria-hidden="true"></i>
              <a
                href="https://www.instagram.com/Seven_Photography_07/?fbclid=IwAR06GLC9kc53pF8VAEremzaVtlvpKIIUiT5VF3cjS2SPNjEYdXX51jd1yB0"
                target="_blank"
                class="text-sm leading-6 place-content-center ml-0 text-white hover:text-white hover:underline decoration-1"
                >Instagram</a
              >
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12">
              <h2 class="">
                Location based on
              </h2>

              <p
                class="text-sm leading-6 place-content-center ml-0 text-white hover:underline decoration-1"
              >
                Colombo, Kandy, Galle, Matara
              </p>
            </div>
          </div>

        </div>

        <div class="flex flex-col bg-[#0F1C2C] text-center">
          <h2 class="text-md font-normal mt-4 mb-4 ml-0 text-white text-center">
            All Rights Reserved. <br />© 2023 RaveenaAmarasiriwardena
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

    .footer-container {
        padding: 40px 0;
        background: #15273C;
    }

    .contact-us {
        color: #0074FC;
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        text-transform: uppercase;
    }

    .phone-number {
        color: #E7E7E7;
        font-family: Open Sans;
        font-size: 45px;
        font-style: normal;
        font-weight: 400;
        line-height: 58px;
    }

    .terms-and-conditions {
        color: #E7E7E7;
        font-family: Open Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        text-transform: capitalize;
        text-decoration: underline;
        margin-top: 40px;
    }
</style>