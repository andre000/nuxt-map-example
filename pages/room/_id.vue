<template>
  <div v-if="selectedRoom" class="detail">
    <h1 class="detail__title">
      {{ selectedRoom.name }}
    </h1>
    <nuxt-link class="detail__back" to="/">
      <arrow-left-icon /> return to home
    </nuxt-link>

    <div class="detail__body">
      <div class="detail__body__aside">
        <img loading="lazy" :src="`https://loremflickr.com/500/500/bedroom,city?random=${Number(Math.random() * 100).toFixed(0)}`">
      </div>
      <div class="detail__body__summary">
        <span class="detail__body__summary__info">
          <user-icon size="32" />
          <div>
            <span class="description">Host</span>
            <span class="value">{{ selectedRoom.host_name }}</span>
          </div>
        </span>
        <span class="detail__body__summary__info">
          <home-icon size="32" />
          <div>
            <span class="description">Neighbourhood</span>
            <span class="value">{{ selectedRoom.neighbourhood_group }} / {{ selectedRoom.neighbourhood }}</span>
          </div>
        </span>
        <span class="detail__body__summary__info">
          <dollar-sign-icon size="32" />
          <div>
            <span class="description">Price</span>
            <span class="value">{{ Number(selectedRoom.price).toLocaleString('en', { style: 'currency', currency: 'USD'}) }} / day</span>
          </div>
        </span>
        <span class="detail__body__summary__info">
          <hash-icon size="32" />
          <div>
            <span class="description">Room Type</span>
            <span class="value">{{ selectedRoom.room_type }}</span>
          </div>
        </span>
        <span class="detail__body__summary__info">
          <client-only>
            <star-icon v-for="(star, i) in Array(~~(Math.random() * 6) || 1)" :key="i" size="32" />
          </client-only>
        </span>
      </div>
      <div class="detail__body__detail">
        <h2>About</h2>

        <div class="content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At delectus nisi dolores, in recusandae tempora ab repellendus rem vel illo cumque molestiae error dolorum perspiciatis sapiente veritatis? Quas, sunt corrupti.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum omnis earum totam quis quasi ut a, minima vel nulla rerum fugiat dolore inventore mollitia nostrum veniam in molestiae unde hic!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {
  ArrowLeftIcon,
  UserIcon,
  HomeIcon,
  DollarSignIcon,
  StarIcon,
  HashIcon
} from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon,
    UserIcon,
    HomeIcon,
    DollarSignIcon,
    StarIcon,
    HashIcon
  },

  data: () => ({
    selectedRoom: null
  }),

  computed: {
    ...mapState(['rooms'])
  },

  created () {
    this.selectedRoom = this.rooms.find(r => Number(r.id) === Number(this.$route.params.id))
    if (!this.selectedRoom) { return this.$router.push('/') }
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.detail {
  padding: 5rem 5rem 0rem 5rem;

  @media screen and (max-width: 1440px) {
    padding: 5rem 1rem 0rem 2rem;
  }

  @media #{$screen-sm-below} {
    padding: 2rem 5rem;
  }

  &__title {
    margin-bottom: 2px;
  }

  &__back {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    svg {
      margin-right: 5px;
    }
  }

  &__body {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 0.3fr 1.7fr;
    gap: 1px 1px;
    grid-template-areas:
      "aside summary"
      "aside detail";

    @media #{$screen-md-below} {
      flex-basis: 100%;
      grid-template-areas:
        "aside detail"
        "summary detail";

      grid-template-rows: 1.3fr 0.7fr;
      grid-template-columns: 0.7fr 1.3fr;
    }

    @media #{$screen-sm-below} {
      grid-template-areas:
        "aside"
        "summary"
        "detail";
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }

    &__aside {
      grid-area: aside;
      img {
        width: 100%;
        height: auto;
        border-radius: 15px;
      }
    }

    &__summary {
      grid-area: summary;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 5rem;

      @media screen and (max-width: 1600px) {
        flex-wrap: wrap;
      }

      @media #{$screen-md} {
        padding: 0px 0.5rem;
      }

      @media #{$screen-sm-below} {
        padding: 2rem 0px 0rem;
      }

      &__info {
        display: flex;
        @media screen and (max-width: 1600px) {
          flex-basis: 30%;
          margin-bottom: 1rem;
        }

        @media #{$screen-md} {
          flex-basis: 50%;
          margin-bottom: 0;
        }

        @media #{$screen-sm} {
          flex-basis: 50%;
          margin-bottom: 1rem;
        }

        @media #{$screen-xs} {
          flex-basis: 100%;
          margin-bottom: 1rem;
        }

        div {
          margin-left: 10px;
        }
        .description {
          display: block;
          font-size: 0.8rem;
          color: #888;
        }
        .value {
          display: block;
        }
      }
    }

    &__detail {
      grid-area: detail;
      padding: 0px 5rem;

      @media #{$screen-sm-below} {
        padding: 0.5rem 0px;
      }

      h2 {
        color: #777;
      }
    }
  }
}
</style>
