<template>
  <section>
    <div class="l-wrapper">
      <header class="products-grid-header">
        <div class="products-grid-header-title" v-html="$prismic.asHtml(slice.primary.section_title)" />
        <div class="products-grid-header-button-wrapper">
          <prismic-link class="a-button" :field="slice.primary.button_link">
            {{ $prismic.asText(slice.primary.button_label) }}
          </prismic-link>
        </div>
      </header>
    </div>
    <div class="products-grid-items-wrapper">
      <div
        v-for="(item, index) in slice.items"
        :key="index"
        class="products-grid-item-wrapper"
      >
        <prismic-image class="products-grid-item-image" :field="item.link_to_product.data.product_image" />
        <p class="products-grid-item-name">
          <prismic-link :field="item.link_to_product">
            {{ $prismic.asText(item.link_to_product.data.product_name) }}
          </prismic-link>
        </p>
        <p class="products-grid-item-subtitle">
          {{ $prismic.asText(item.link_to_product.data.sub_title) }}
        </p>
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
/**
 * Header
 */

 .products-grid-header {
  display: flex;
  justify-content: space-between;

  @media (max-width: 774px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

.products-grid-header-title {
  max-width: 592px;
  font-family: "PT Mono", monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.786;
}

.products-grid-header-button-wrapper {
  @media (min-width: 775px) {
    margin-left: 30px;
  }

  @media (max-width: 774px) {
    margin-top: 30px;
  }
}

/**
 * Items
 */

.products-grid-items-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 1190px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1189px) {
    max-width: 792px;
  }

  @media (max-width: 791px) {
    max-width: 396px;
  }
}

.products-grid-item-wrapper {
  max-width: 366px;
  margin: 70px 15px 0;
}

.products-grid-item-image {
  width: 100%;
  max-height: 340px;
  object-fit: cover;
}

.products-grid-item-name {
  margin-top: 30px;
  color: #001000;
  font-family: "PT Mono", monospace;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  &::before {
    content: "⇥";
  }

  a {
    text-decoration: underline
  }
}

.products-grid-item-subtitle {
  margin-top: 10px;
  color: #7f7d7c;
  text-align: center;
}

</style>
