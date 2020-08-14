<template>
  <div class="average">
    <div class="average__title">
      <h1>Average price by Neighbourhood</h1>
      <nuxt-link class="average__title__back" to="/">
        <arrow-left-icon /> return to home
      </nuxt-link>
    </div>
    <div class="average__body">
      <div v-for="nb in averageGrouped" :key="nb.neighbourhood_group" class="average__body__card">
        <div class="average__body__card__title">
          {{ nb.neighbourhood_group }}
        </div>
        <div v-for="av in nb.averages" :key="nb.neighbourhood_group+av.room_type " class="average__body__card__items">
          <span class="type">{{ av.room_type }}</span>
          <span class="type">{{ Number(av.price).toLocaleString('en', { style: 'currency', currency: 'USD'}) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import { mapState } from 'vuex'
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon
  },
  computed: {
    averageGrouped () {
      return this.averagePrice.reduce((t, d) => {
        const nbCreated = t.findIndex(({ neighbourhood_group }) => neighbourhood_group === d.neighbourhood_group)
        if (nbCreated !== -1) {
          t[nbCreated].averages = [...t[nbCreated].averages, { room_type: d.room_type, price: d.price }]
        } else {
          t.push({
            neighbourhood_group: d.neighbourhood_group,
            averages: [{ room_type: d.room_type, price: d.price }]
          })
        }

        return t
      }, [])
    },
    ...mapState(['averagePrice'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.average {
  padding: 5rem 5rem 0rem 5rem;

  &__title {
    h1 {
      margin-bottom: 5px;
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
  }

  &__body {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;

    &__card {
      width: 20%;
      box-sizing: border-box;
      padding: 1rem 1.5rem;
      border-radius: 15px;
      box-shadow: 3px 4px 10px -5px rgba(51,51,51,0.2);
      border: 1px solid #eee;

      @media #{$screen-md} {
        width: 50%;
      }

      @media #{$screen-sm-below} {
        width: 100%;
      }

      &__title {
        font-weight: bold;
        font-size: 1.25rem;
        display: block;
        margin-bottom: 1rem;
      }

      &__items {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        color: #666;
      }
    }
  }
}
</style>
