<template>
  <div class="card">
    <div class="card__media">
      <img loading="lazy" src="https://loremflickr.com/320/320" alt="Room Photo">
    </div>
    <div class="card__body">
      <div class="card__body__title">
        {{ title }}
      </div>
      <div class="card__body_description">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 25vh;
  position: relative;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 3px 4px 10px -5px rgba(51,51,51,0.2);
  border: 1px solid #eee;
  display: flex;
  content-visibility: hidden;
  contain-intrinsic-size: 25vh;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  &__media {
    flex-basis: 150px;
    img {
      height: 15vh;
      width: auto;
      border-radius: 10px;
    }
  }

  &__body {
    flex-basis: calc(100% - 150px);
    &__title {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
}
</style>
