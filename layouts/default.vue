<template>
  <div>
    <div id="header" class="header" :class="{'header--is-nav-opened': menuOpen}">
      <div class="header-inner">
        <router-link class="header-name" to="/">
          {{ layout.site_name }}
        </router-link>
        <nav class="header-nav">
          <prismic-link
            v-for="({ link, text }, index) in layout.header_nav_items"
            :key="index"
            class="header-nav-link"
            :field="link"
          >
            {{ text }}
          </prismic-link>
          <a href="https://github.com/Atinux/nuxt-prismic-showcase">GitHub</a>
        </nav>
        <div id="header-burger" class="header-burger" @click="toggleMenu">
          <img
            class="header-burger-img header-burger-img--closed"
            src="~/assets/img/burger-closed.svg"
            alt="Mobile menu toggle - closed state"
          >
          <img
            class="header-burger-img header-burger-img--opened"
            src="~/assets/img/burger-opened.svg"
            alt="Mobile menu toggle - opened state"
          >
        </div>
      </div>
    </div>
    <main>
      <nuxt />
    </main>
    <footer class="footer">
      <div class="footer-inner">
        <div>
          <p class="footer-name">
            {{ layout.site_name }}
          </p>
          <div class="footer-social-items">
            <prismic-link
              v-for="({ link, icon }, index) in layout.footer_social_items"
              :key="index"
              :field="link"
              class="footer-social-item"
            >
              <prismic-image :field="icon" />
            </prismic-link>
          </div>
        </div>
        <nav class="footer-nav">
          <prismic-link
            v-for="({ link, text }, index) in layout.footer_nav_items"
            :key="index"
            class="footer-nav-link"
            :field="link"
          >
            {{ text }}
          </prismic-link>
          <a href="https://github.com/Atinux/nuxt-prismic-showcase">GitHub</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      menuOpen: false
    }
  },
  computed: mapState(['layout']),
  watch: {
    '$route.path' () {
      this.menuOpen = false
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  },
  head () {
    return {
      titleTemplate: `%s | ${this.layout.site_name}`
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 100px 0 50px;

  @media (max-width: 1000px) {
    padding: 30px 0;
  }
}

.header--is-nav-opened {
  .header-nav {
    opacity: 1;
    visibility: visible;
  }

  .header-burger-img--closed {
    opacity: 0;
    visibility: hidden;
  }

  .header-burger-img--opened {
    opacity: 1;
    visibility: visible;
  }
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1190px;
  padding: 0 15px;
  margin: 0 auto;
}

.header-name {
  flex-shrink: 0;
  font-size: 28px;
  font-weight: 700;
}

.header-nav {
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
  color: #7f7d7c;

  @media (max-width: 1000px) {
    flex-wrap: nowrap;
    flex-direction: column;
    margin-left: 0;

    position: absolute;
    top: 92px;
    left: 0;
    right: 0;
    min-height: calc(100vh - 92px);
    background-color: #f6f6f6;
    font-size: 30px;
    opacity: 0;
    visibility: hidden;
    transition: 150ms;
  }
}

.header-nav-link {
  &:not(:last-child) {
    margin-right: 40px;

    @media (max-width: 1000px) {
      margin-right: 0;
    }
  }

  @media (max-width: 1000px) {
    border-bottom: 1px solid #d6d6d6;
    padding: 30px;
  }
}

.header-burger {
  display: none;

  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: inline-block;
  }
}

.header-burger-img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: 150ms;
}

.header-burger-img--closed {
  opacity: 1;
  visibility: visible;
}

.header-burger-img--opened {
  opacity: 0;
  visibility: hidden;
}

.footer {
  min-height: 420px;
  padding: 90px 0;
  background: #f6f6f6 url('../assets/img/footer-background.png') no-repeat center;

  @media (max-width: 1680px) {
    background-size: cover;
  }
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  max-width: 1190px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    align-items: flex-start;
    padding: 0 60px;
  }

  @media (max-width: 565px) {
    flex-direction: column;
    justify-content: flex-start;
  }
}

.footer-name {
  font-size: 28px;
  font-weight: 700;
}

.footer-social-items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}

.footer-social-item {
  display: inline-block;

  &:not(:last-child) {
    margin-right: 20px;
  }

  width: 28px;
  height: 28px;

  img {
    width: 100%;
    height: 100%;
  }
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
  color: #7f7d7c;

  @media (max-width: 1000px) {
    flex-wrap: nowrap;
    flex-direction: column;
    font-size: 20px;
    text-align: right;
  }

  @media (max-width: 565px) {
    margin-left: 0;
    margin-top: 40px;
    text-align: left;
  }
}

.footer-nav-link {
  &:not(:last-child) {
    margin-right: 40px;

    @media (max-width: 1000px) {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
}
</style>
