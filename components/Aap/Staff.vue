<template>
  <b-card
    class="poet"
    itemprop="author"
    itemscope
    itemtype="http://schema.org/Person"
  >
    <a @click="toggleDetails">
      <b-img-lazy
        :src="img.src"
        :alt="img.alt"
        fluid-grow
      />
    </a>
    <div
      :class="detailClass"
      class="poet__name-bio">
      <div
        class="poet__name"
        itemprop="title"
      >
        <h3>
          <a
            class="text-white"
            @click="toggleDetails">
            {{ title }}
          </a>
        </h3>
        <div
          class="job-title"
          v-html="replaceFileUrl(job)"/>
      </div>
      <div class="poet__bio">
        <div
          class="orange-link-holder">
          <a
            :href="link"
            class="poet__link"
          >
            View Contributions
          </a>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  },
  computed: {
    detailClass() {
      return this.showDetails ? "show-details" : "";
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    bio: {
      type: String,
      default: ""
    },
    img: {
      type: Object,
      default: () => ({})
    },
    job: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style scoped lang="scss">
.poet__name-bio:hover,
.poet__name-bio:active,
.poet__name-bio:focus,
.show-details.poet__name-bio {
  top: 154px;
}
.poet {
  margin: 0;
  position: relative;
  overflow: hidden;
  border: none;
  .card-body {
    padding: 0;
  }
  .empty-div {
    min-height: 284px;
    min-width: 282px;
    background-color: var(--gray-900);
  }
  .poet__name {
    min-height: 84px;
    padding: 12px;
    h3 {
      font-size: 1rem;
    }
    .job-title {
      font-size: 0.9rem;
      color: var(--white);
    }
  }
  .poet__name:hover {
    border-bottom: none;
  }
  &__name-bio {
    position: absolute;
    top: calc(100% - 5.3rem);
    bottom: 0;
    left: 0;
    right: 0;
    transition: top 0.25s ease-in-out;
    display: flex;
    flex-direction: column;
  }
  .poet__bio {
    overflow: hidden;
  }
  .orange-link-holder {
    background-color: var(--orange);
    min-width: 282px;
    padding: 12px;
    position: relative;
    left: -16px;
    bottom: 18px;
    a {
      color: var(--gray-darkest);
    }
  }
  &__name {
    margin: 0;
    padding: 1rem;
    background-color: var(--gray-darkest);
    border-bottom: 3px solid var(--orange);
    font-size: 1.25rem;
    color: var(--white);
    opacity: 0.9;
  }

  &__bio {
    flex-grow: 1;
    padding: 1rem;
    color: var(--white);
    background-color: var(--gray-800);
    font-weight: 400;
    overflow: scroll;
  }

  &__link {
    color: var(--white);
    font-weight: 700;

    &::after {
      content: " >";
    }

    &:hover,
    &:focus,
    &:active {
      color: var(--white);
      text-decoration: underline;
    }
  }
}
</style>
