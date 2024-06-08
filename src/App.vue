<script setup lang="ts">
import { elementColour, elementColourByTheme } from "./themes/index";

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

//To restore after preview has been selected
const savedTheme = ref('')


watch(currentTheme, () => {
  setTheme(currentTheme.value)
});

//Theme dropbox
function toggleThemeDisplay() {
  themeListDisplay.value = !themeListDisplay.value;
}

//Saves the theme across all views and triggers rerender
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

    //links not to show such as 404 page
    if (x.meta.showLink != null && !x.meta.showLink) {
      return
    }
    const id = x.name?.toString() ?? "";
    if (id == "") {
      return;
    }
    //No destination such as on home page
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

    //Current page we are on gets special link styling
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

//Previews the theme without saving
function previewTheme(name: string) {

  if (savedTheme.value.length == 0) {
    savedTheme.value = currentTheme.value
  }

  setTheme(name)

}

function exitPreviewTheme() {

  setTheme(savedTheme.value)
  savedTheme.value = ''

}
function themeAssigned(name: string) {

  savedTheme.value = name //overwrite any previews
  setTheme(name)

}
</script>

<template>
  <div id="themeDiv">
    <span id="theme" @click="toggleThemeDisplay">Theme <span v-show="!themeListDisplay">➢</span><span v-show="themeListDisplay" >⮛</span> </span>
    <ul class="themeList" v-show="themeListDisplay">
      <li class="themeListItem" @click="themeAssigned('default')" @mouseover="previewTheme('default')"
        @mouseout="exitPreviewTheme()">Default</li>
      <li class="themeListItem" :style="elementColourByTheme('li', theme.name)" v-for="theme in themes"
        :key="theme.name" :id="'route-' + theme.name" @click="themeAssigned(theme.name)"
        @mouseover="previewTheme(theme.name)" @mouseout="exitPreviewTheme()">
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
