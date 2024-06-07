<script setup lang="ts">
import { elementColour } from "../themes/index";
import { ref } from "vue"
import { themeStore } from '../stores/themeStore'
import { useRoute, useRouter } from 'vue-router'

const themeStoreInstance = themeStore()
const router = useRouter()

const previewTextColour = ref('#00AAAA')
const previewLinkColour = ref('#AA00AA')
const previewLinkActiveColour = ref('#AAAA00')
const previewThemeName = ref('')

const navAlert = ref(false)

const countDown = ref(5)

function addTheme() {
  themeStoreInstance.addTheme(previewThemeName.value, previewTextColour.value, previewLinkColour.value, previewLinkActiveColour.value)
  previewThemeName.value = ''

  redirect()

}

function redirect() {

  navAlert.value = true

  const countDownfun = () => {


    if (countDown.value == 0) {
      router.go(-1)
      return
    }
    countDown.value -= 1
    setTimeout(countDownfun, 1000)
  }
  setTimeout(countDownfun, 1000)



}


</script>

<template>
  <h2> An area to make a custom theme</h2>
  <form @submit.prevent="addTheme">
    <fieldset>
      <label for="textColorInput">Text colour</label>
      <input id="textColourInput" type="color" v-model="previewTextColour">
      <h3 :style="{ color: previewTextColour }">preview</h3>
    </fieldset>
    <fieldset>
      <label for="linkColorInput">Link colour</label>
      <input id="linkColourInput" type="color" v-model="previewLinkColour">
      <h3 :style="{ color: previewLinkColour }">preview link Colour</h3>
    </fieldset>
    <fieldset>
      <label for="activeLinkInput">Active Link Colour </label>
      <input id="activeLinkInput" type="color" v-model="previewLinkActiveColour">
      <h3 :style="{ color: previewLinkActiveColour }"> Preview Link Active Colour </h3>
    </fieldset>
    <fieldset>
      <label for="themeNameInput">Enter your Themes name</label>
      <input id="themeNameInput" v-model="previewThemeName" min="5"><button>submit</button>
    </fieldset>
  </form>

  <h3 :style="{ color: previewTextColour }" v-show="navAlert">I am going to use this as a pretext to show I know some
    vue
    routing
    you will be navigated back in <em>{{ countDown }}</em> seconds
  </h3>

</template>
