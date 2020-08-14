<template>
  <div class="card">
    <div class="card__media">
      <img loading="lazy" src="https://loremflickr.com/320/320" alt="Room Photo">
    </div>
    <div class="card__body">
      <div class="card__body__title">
        {{ room.name }}
      </div>
      <div class="card__body__description">
        <div class="card__body__description__host">
          <user-icon /> <span>{{ room.host_name }}</span>
        </div>
        <div class="card__body__description__region">
          <home-icon /> <span>{{ room.neighbourhood_group }}</span>
        </div>
        <div class="card__body__description__region">
          <dollar-sign-icon /> <span>{{ Number(room.price).toLocaleString('en', { style: 'currency', currency: 'USD'}) }} / day</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserIcon, HomeIcon, DollarSignIcon } from 'vue-feather-icons'
export default {
  components: {
    UserIcon,
    HomeIcon,
    DollarSignIcon
  },
  props: {
    room: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.card {
  min-height: 175px;
  position: relative;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 3px 4px 10px -5px rgba(51,51,51,0.2);
  border: 1px solid #eee;
  display: flex;
  transition: box-shadow 0.33s ease-in-out;
  cursor: pointer;
  content-visibility: hidden;
  contain-intrinsic-size: 25vh;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  &:hover {
    box-shadow: 3px 4px 10px 0px rgba(51,51,51,0.2);
  }

  @media #{$screen-md-below} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__media {
    margin-right: 1rem;
    img {
      width: calc(max(100px, 6vw));
      height: auto;
      border-radius: 10px;
    }

    @media #{$screen-md-below} {
      width: 100%;
      text-align: center;
      height: auto;
      margin: 0px 0px 10px 0px!important;
    }
  }

  &__body {
    flex-basis: calc(100% - 150px);
    &__title {
      font-weight: bold;
      font-size: 1.25rem;
    }

    &__description {
      padding-top: 10px;
      div {
        display: flex;
        align-items: center;
        text-align: left;
        margin: 7.5px 0px;
        span {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
