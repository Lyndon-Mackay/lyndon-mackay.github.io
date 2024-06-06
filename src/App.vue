<script setup lang="ts">
import { elementColour } from "./themes/index";

import { themeStore } from "./stores/themeStore";
import { ref, watch, type Ref, type StyleValue } from "vue";
import { storeToRefs } from "pinia";

import { useRoute, useRouter } from "vue-router";

interface RouteStyle {
  name: string;
  style: StyleValue;
  active: boolean;
}

const router = useRouter();

const routeList = ref(router.getRoutes());
const routeAndStyleList: Ref<RouteStyle[]> = ref([]);

const themeStoreInstance = themeStore();
const { themes, currentTheme } = storeToRefs(themeStoreInstance);
const themeListDisplay = ref(false);

watch(currentTheme, () => {
  setTheme(currentTheme.value)
});

function toggleThemeDisplay() {
  themeListDisplay.value = !themeListDisplay.value;
}

function setTheme(name: string) {

  themeStoreInstance.setCurrentTheme(name);

  routeAndStyleList.value.forEach((x) => {

    if (x.active) {
      x.style = themeStoreInstance.getLinkActiveColour();
    } else {
      x.style = elementColour("a");
    }
  });
}
function resetRouterList(toName?: string) {

  routeAndStyleList.value = [];

  routeList.value.forEach((x) => {
    const id = x.name?.toString() ?? "";
    if (id == "") {
      return;
    }
    if (toName == null) {

      routeAndStyleList.value.push({
        style: elementColour("a"),
        name: id,
        active: false,
      });
      return
    }

    const link = document.getElementById("route-" + id);
    if (link == null) {
      return;
    }

    if (toName == id) {
      routeAndStyleList.value.push({
        style: themeStoreInstance.getLinkActiveColour(),
        name: id,
        active: true,
      });
    } else {
      routeAndStyleList.value.push({
        style: elementColour("a"),
        name: id,
        active: false,
      });
    }
  });
}

resetRouterList();


router.afterEach((to) => {
  if (to.name == null) {
    resetRouterList()
  } else {
    resetRouterList(to.name.toString())
  }
});
</script>

<template>
  <div id="themeDiv">
    <span id="theme" @click="toggleThemeDisplay" @mouseout="console.log('you left')">Theme</span>
    <ul v-show="themeListDisplay">
      <li class="themeListItem" @click="setTheme('default')">Default</li>
      <li class="themeListItem" v-for="theme in themes" :key="theme.name" :id="'route-' + theme.name"
        @click="setTheme(theme.name)">
        {{ theme.name }}
      </li>
      <li class="themeListItem">
        <RouterLink :to="{ name: 'Custom' }">Custom Theme</RouterLink>
      </li>
    </ul>
  </div>
  <div id="main">
    <section id="title">
      <h1 :style="elementColour('h1')">Lyndon's website</h1>
    </section>
    <section></section>

    <nav class="mobile-dropdown">
      <RouterLink v-for="route in routeAndStyleList" :to="{ name: route.name }" :id="'route-' + route.name?.toString()"
        :key="route.name" :style="route.style" class="mobile-dropdown-content">{{ route.name }}</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
