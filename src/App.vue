<script setup lang="ts">
import { elementColour } from './themes/index'

import { themeStore } from './stores/themeStore'
import { ref, type VNodeRef } from 'vue'
import { storeToRefs } from 'pinia'

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const routeList = ref(router.getRoutes())

const themeStoreInstance = themeStore()
const { themes, currentTheme } = storeToRefs(themeStoreInstance)
const themeListDisplay = ref(false)

function toggleThemeDisplay() {
  themeListDisplay.value = !themeListDisplay.value
}

function setTheme(name: string) {
  themeStoreInstance.setCurrentTheme(name)
}
</script>

<template>
  <div>
    <span id="theme" @click="toggleThemeDisplay" @mouseout="console.log('you left')">Theme</span>
    <ul v-show="themeListDisplay">
      <li @click="setTheme('default')">Default</li>
      <li v-for="theme in themes" :key="theme.name" @click="setTheme(theme.name)">
        {{ theme.name }}
      </li>
    </ul>
  </div>
  <div id="main">
    <section id="title">
      <h1 :style="elementColour('h1')">Lyndon's website</h1>
    </section>
    <section></section>

    <nav>
      <RouterLink v-for="route in routeList" :to="{ name: route.name }" :key="route.name">{{
        route.name
      }}</RouterLink>
      <RouterLink :style="elementColour('a')" to="/">Home</RouterLink>
      <RouterLink :style="elementColour('a')" to="/rust">Rust</RouterLink>
      <RouterLink :style="elementColour('a')" to="/csharp">C#/dotnet</RouterLink>
      <RouterLink :style="elementColour('a')" to="/database">Databases</RouterLink>
      <RouterLink :style="elementColour('a')" to="/web">Web-development</RouterLink>
      <RouterLink :style="elementColour('a')" to="/construction">Construction</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
