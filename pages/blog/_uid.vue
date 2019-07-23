<template>
  <div>
    <separator />
    <article class="blog-post-article">
      <div class="blog-post-inner">
        <div class="blog-post-image-wrapper">
          <prismic-image class="blog-post-image" :field="blogpost.data.image" />
        </div>
        <div class="blog-post-title" v-html="$prismic.asHtml(blogpost.data.title)" />
        <div class="blog-post-rich-content" v-html="$prismic.asHtml(blogpost.data.rich_content)" />
        <div class="blog-post-author-wrapper">
          <prismic-image
            v-if="blogpost.data.author.data"
            class="blog-post-author-picture"
            :field="blogpost.data.author.data.picture"
          />
          <div>
            <p v-if="blogpost.data.author.data" class="blog-post-author-name">
              {{ $prismic.asText(blogpost.data.author.data.name) }}
            </p>
            <p v-if="blogpost.data.author.data" class="blog-post-author-bio">
              {{ $prismic.asText(blogpost.data.author.data.bio) }}
            </p>
          </div>
        </div>
      </div>
    </article>
    <div :data-wio-id="blogpost.id" />
  </div>
</template>

<script>
const graphQuery = `{
  blog_post {
    ...blog_postFields
    author {
      name
      bio
      picture
    }
  }
}`

export default {
  async asyncData ({ params, $prismic }) {
    const blogpost = await $prismic.api.getByUID('blog_post', params.uid, { graphQuery })

    return { blogpost }
  },
  head () {
    return {
      title: this.$prismic.asText(this.blogpost.data.title),
      meta: [
        { vmid: 'description', name: 'description', content: this.$prismic.asText(this.blogpost.data.rich_content).substring(0, 158) }
      ]
    }
  }
}
</script>

<style lang="scss">
.blog-post-article {
  padding: 70px 0 130px;
}

.blog-post-inner {
  max-width: 794px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.blog-post-image-wrapper {
  margin-bottom: 130px;
  font-size: 0;
  text-align: center;
}

.blog-post-image {
  width: 100%;
  max-height: 565px;
  object-fit: cover;
}

.blog-post-title {
  max-width: 554px;
  margin: 0 auto ;
  font-family: "PT Mono", monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.786;
  text-align: center;
}

.blog-post-rich-content {
  margin-top: 45px;
  font-family: "PT Mono", monospace;
  font-size: 17px;
  line-height: 2.353;

  p {
    &:not(:first-child) {
      margin-top: 30px;
    }

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  h2 {
    &:not(:first-child) {
      margin-top: 70px;
    }

    &:not(:last-child) {
      margin-bottom: 70px;
    }

    max-width: 554px;
    margin-left: auto;
    margin-right: auto;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.786;
    text-align: center;
  }

  .block-img {
    &:not(:first-child) {
      margin-top: 70px;
    }

    &:not(:last-child) {
      margin-bottom: 70px;
    }

    font-size: 0;

    img {
      max-width: 100%;
    }
  }

  a {
    text-decoration: underline;
  }
}

.blog-post-author-wrapper {
  display: flex;
  border-top: 1px solid #d6d6d6;
  margin-top: 70px;
  padding-top: 50px;

  @media (max-width: 565px) {
    flex-direction: column;
  }
}

.blog-post-author-picture {
  margin-right: 46px;
  width: 124px;
  height: 124px;
  border-radius: 62px;
  object-fit: cover;

  @media (max-width: 565px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.blog-post-author-name {
  font-family: "PT Mono", monospace;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.667;
}

.blog-post-author-bio {
  margin-top: 10px;
  font-family: "PT Mono", monospace;
  font-size: 14px;
  line-height: 2.286;
}
</style>
