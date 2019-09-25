<template>
  <div class="container">
    <div class="flex flex-col justify-center h-screen text-center">
      <h1 class="title">
        Sleeping Car Porters
      </h1>
      <h2 class="subtitle">
        Projection design
      </h2>
      <div class="links">
        <div class="mb-4">
          <nuxt-link to="/zodiac" class="button--green mx-2">
            Cipher
          </nuxt-link>
          <nuxt-link to="/cues" class="button--green mx-2">
            Cues
          </nuxt-link>
          <nuxt-link to="/dmx" class="button--green mx-2">
            DMX
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/controls" class="button--green">
            Controls
          </nuxt-link>
        </div>

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
