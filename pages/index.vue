<template>
  <div>
    <header class="homepage-header">
      <div class="l-wrapper">
        <div class="homepage-header-title" v-html="$prismic.asHtml(home.data.title)" />
      </div>
    </header>

    <section class="homepage-banner">
      <prismic-image class="homepage-banner-image" :field="home.data.banner_image" />
      <div class="homepage-banner-box-wrapper">
        <div class="homepage-banner-box" v-html="$prismic.asHtml(home.data.banner_text)" />
      </div>
    </section>

    <div v-if="home.data.body" class="homepage-slices-wrapper">
      <div v-for="(slice, index) in home.data.body" :key="index">
        <div
          v-if="slice.slice_type === 'cta_banner'"
          class="homepage-slice-wrapper"
        >
          <cta-banner :slice="slice" />
        </div>
        <div v-if="slice.slice_type === 'featured_items'" class="homepage-slice-wrapper">
          <products-grid :slice="slice" />
        </div>
        <div v-if="slice.slice_type === 'big_bullet_item'" class="homepage-slice-wrapper">
          <numeroted-items :slice="slice" />
        </div>
        <div v-if="slice.slice_type === 'separator'" class="homepage-slice-wrapper">
          <separator :slice="slice" />
        </div>
        <div v-if="slice.slice_type === 'text_block'" class="homepage-slice-wrapper">
          <text-block :slice="slice" />
        </div>
      </div>
    </div>
    <div :data-wio-id="home.id" />
  </div>
</template>

<script>
import ProductsGrid from '~/components/slices/ProductsGrid.vue'
import CtaBanner from '~/components/slices/CtaBanner.vue'
import NumerotedItems from '~/components/slices/NumerotedItems.vue'
import Separator from '~/components/slices/Separator.vue'
import TextBlock from '~/components/slices/TextBlock.vue'

const graphQuery = `
{
  homepage {
    ...homepageFields
    body {
      ... on text_block {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
        }
      }
      ... on separator {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
        }
      }
      ... on cta_banner {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
        }
      }
      ... on big_bullet_item {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
        }
      }
      ... on featured_items {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          link_to_product {
            product_image
            product_name
            sub_title
          }
        }
      }
    }
  }
}
`

export default {
  components: {
    ProductsGrid,
    CtaBanner,
    NumerotedItems,
    Separator,
    TextBlock
  },
  head: {
    title: 'Home'
  },
  async asyncData ({ $prismic }) {
    const home = await $prismic.api.getSingle('homepage', { graphQuery })

    return { home }
  }
}
</script>

<style lang="scss">
.homepage-header {
  padding: 80px 0 100px;

  @media (max-width: 565px) {
    padding: 60px 0;
  }
}

.homepage-header-title {
  max-width: 764px;
  font-family: "PT Mono", monospace;
  font-size: 28px;
  line-height: 1.786;

  @media (max-width: 565px) {
    font-size: 22px;
    line-height: 1.909;
  }
}

/**
 * Banner
 */

.homepage-banner {
  position: relative;

  @media (max-width: 1000px) {
    position: static;
    overflow: hidden;
    font-size: 0;
  }
}

.homepage-banner-image {
  width: 100%;
  height: 600px;
  background-color: #f6f6f6;
  object-fit: cover;
  object-position: left center;

  @media (max-width: 1000px) {
    width: 200%;
    height: auto;
  }
}

.homepage-banner-box-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1000px) {
    position: static;
  }
}

.homepage-banner-box {
  position: relative;
  top: 180px;
  width: 100%;
  max-width: 565px;
  margin-left: auto;
  padding: 70px;
  background-color: #121212;
  color: white;
  font-family: "PT Mono", monospace;
  font-size: 17px;
  line-height: 2.353;

  @media (max-width: 1000px) {
    position: static;
    max-width: none;
    margin-left: 0;
  }

  @media (max-width: 565px) {
    padding: 60px;
    font-size: 16px;
    line-height: 2.25;
  }

  p:not(:first-child) {
    margin-top: 40px;

    @media (max-width: 565px) {
      margin-top: 30px;
    }
  }
}

/**
 * Slices
 */

.homepage-slices-wrapper {
  padding: 130px 0;
  > div:not(:first-child) {
    margin-top: 130px;
  }
}
</style>
