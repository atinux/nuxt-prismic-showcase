<template>
  <section>
    <div class="l-wrapper">
      <header class="numeroted-items-header">
        <prismic-rich-text class="numeroted-items-header-title" :field="slice.primary.title_section" />
      </header>
    </div>
    <div class="numeroted-items-items-wrapper">
      <prismic-rich-text
        v-for="(item, index) in slice.items"
        :key="index"
        class="numeroted-items-item-wrapper"
        :field="item.description_paragraph"
      />
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
.numeroted-items-header {
  display: flex;
  justify-content: center;
}

.numeroted-items-header-title {
  max-width: 592px;
  font-family: "PT Mono", monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.786;
}

/**
 * Items
 */

.numeroted-items-items-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1190px;
  margin-left: auto;
  margin-right: auto;
  counter-reset: item;
}

.numeroted-items-item-wrapper {
  max-width: 366px;
  margin: 70px 15px 0;

  font-family: "PT Mono", monospace;
  font-size: 18px;
  line-height: 1.889;
  text-align: center;

  &::before {
    counter-increment: item;
    content: counter(item);
    display: inline-block;
    width: 82px;
    border-bottom: 4px solid #e7e7e7;
    padding-bottom: 30px;
    margin-bottom: 30px;
    font-size: 68px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    &:not(:first-child) {
      margin-top: 40px;
    }

    em {
      color: #acacac;
    }
  }
}

</style>
