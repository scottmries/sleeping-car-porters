<template>
  <div class="container">
    <div>
      <h1 class="title">
        Sleeping Car Porters
      </h1>
      <h2 class="subtitle">
        Projection design
      </h2>
      <div class="links">
        <nuxt-link to="/zodiac" class="button--green">
          Zodiac cipher
        </nuxt-link>
        <nuxt-link to="/cues" class="button--green">
          Cues
        </nuxt-link>
        <nuxt-link to="/instructions" class="button--green">
          Instructions
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
