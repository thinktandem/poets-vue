<template>
  <div class="support">
    <h3 class="signup-title">Support Us</h3>
    <div class="support__content">
      <ul>
        <li
          v-for="(item, key) in supportMenu"
          :key="key"
        >
          <a :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supportMenu: [
        {
          title: "Become a Member",
          href: "/membership"
        },
        {
          title: "Donate Now",
          href: "/academy-american-poets/help-champion-poets-and-poetry"
        },
        {
          title: "Get Involved",
          href: "/academy-american-poets/get-involved"
        },
        {
          title: "Make a Bequest",
          href: "/academy-american-poets/make-bequest"
        },
        {
          title: "Advertise with Us",
          href: "/academy-american-poets/advertise-us"
        },
        {
          title: "Poets Shop",
          href: "https://poets.myshopify.com/"
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    a {
      font-weight: 600;
      line-height: 2;
    }
  }
}
</style>
