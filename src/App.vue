<script setup lang="ts">
import { elementColour } from './themes/index'

import { themeStore } from './stores/themeStore'
import { ref, type Ref, type StyleValue } from 'vue'
import { storeToRefs } from 'pinia'

import { useRoute, useRouter } from 'vue-router'

interface RouteStyle {
  name: string
  style: StyleValue
  active: boolean
}

const router = useRouter()

const routeList = ref(router.getRoutes())
const routeAndStyleList: Ref<RouteStyle[]> = ref([])

const themeStoreInstance = themeStore()
const { themes, currentTheme } = storeToRefs(themeStoreInstance)
const themeListDisplay = ref(false)

function toggleThemeDisplay() {
  themeListDisplay.value = !themeListDisplay.value
}

function setTheme(name: string) {
  themeStoreInstance.setCurrentTheme(name)
  routeAndStyleList.value.forEach((x) => {
    if (x.active) {
      x.style = { color: themeStoreInstance.getLinkActiveColour() }
    } else {
      x.style = elementColour('a')
    }
  })
}

routeList.value.forEach((x) => {
  const id = x.name?.toString() ?? ''

  routeAndStyleList.value.push({ style: {}, name: id, active: false })
})

router.afterEach((to) => {
  routeAndStyleList.value = []
  routeList.value.forEach((x) => {
    const id = x.name?.toString() ?? ''
    if (id == '') {
      return
    }

    const link = document.getElementById('route-' + id)
    if (link == null) {
      return
    }

    if (to.name == id) {
      routeAndStyleList.value.push({
        style: { color: themeStoreInstance.getLinkActiveColour() },
        name: id,
        active: true
      })
    } else {
      routeAndStyleList.value.push({ style: elementColour('a'), name: id, active: false })
    }
  })
})
</script>

<template>
  <div>
    <span id="theme" @click="toggleThemeDisplay" @mouseout="console.log('you left')">Theme</span>
    <ul v-show="themeListDisplay">
      <li @click="setTheme('default')">Default</li>
      <li
        v-for="theme in themes"
        :key="theme.name"
        :id="'route-' + theme.name"
        @click="setTheme(theme.name)"
      >
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
      <RouterLink
        v-for="route in routeAndStyleList"
        :to="{ name: route.name }"
        :id="'route-' + route.name?.toString()"
        :key="route.name"
        :style="route.style"
        >{{ route.name }}</RouterLink
      >
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
