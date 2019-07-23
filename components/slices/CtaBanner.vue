<template>
  <section>
    <div class="cta-banner-inner">
      <prismic-image class="cta-banner-image" :field="slice.primary.image_banner" />
      <div class="cta-banner-content">
        <div class="cta-banner-box">
          <div class="cta-banner-title" v-html="$prismic.asHtml(slice.primary.banner_title)" />
          <div class="cta-banner-text" v-html="$prismic.asHtml(slice.primary.banner_text)" />
        </div>
        <div class="cta-banner-link-wrapper">
          <prismic-link class="cta-banner-link" :field="slice.primary.cta_link">
            {{ slice.primary.cta_label }}
          </prismic-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      default: () => ({ primay: {} })
    }
  }
}
</script>

<style lang="scss">
.cta-banner-inner {
  position: relative;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
  text-align: right; // Put the image on right
}

.cta-banner-image {
  display: inline-block; // Allow to put the image on right with `text-align: right;`
  width: 100%;
  max-width: 665px;
  height: 100%;
  max-height: 665px;
  object-fit: cover;

  @media (max-width: 1000px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 580px;
  }
}

.cta-banner-content {
  position: absolute;
  top: 206px;
  left: 0;
  max-width: 580px;
  text-align: left;

  @media (max-width: 1000px) {
    position: static;
    margin-left: auto;
    margin-right: auto;
  }
}

.cta-banner-box {
  padding: 80px;
  background-color: #121212;
  color: white;
  font-family: "PT Mono", monospace;

  @media (max-width: 580px) {
    padding: 60px;
  }
}

.cta-banner-title {
  font-size: 28px;
  line-height: 1.786;

  @media (max-width: 580px) {
    font-size: 22px;
    line-height: 1.909;
  }
}

.cta-banner-text {
  margin-top: 5px;
  font-size: 17px;
  line-height: 2.353;

  @media (max-width: 580px) {
    font-size: 16px;
    line-height: 2.25;
  }
}

.cta-banner-link-wrapper {
  margin-top: 62px;

  @media (max-width: 1190px) {
    padding: 0 15px;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }
}

.cta-banner-link {
  font-family: "PT Mono", monospace;
  font-size: 17px;
  font-weight: 700;

  &::before {
    content: "[ ";
  }

  &::after {
    content: " ⇥ ]";
  }
}
</style>
