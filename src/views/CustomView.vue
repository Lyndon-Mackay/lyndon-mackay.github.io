<script setup lang="ts">
import { elementColour } from "../themes/index";
import { ref } from "vue"
import { themeStore } from '../stores/themeStore'

const themeStoreInstance = themeStore()


const previewTextColour = ref('#00AAAA')
const previewLinkColour = ref('#AA00AA')
const previewLinkActiveColour = ref('#AAAA00')
const previewThemeName = ref('')

function addTheme() {


  themeStoreInstance.addTheme(previewThemeName.value, previewTextColour.value, previewLinkColour.value, previewLinkActiveColour.value)
  previewThemeName.value = ''

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

</template>
