<script setup lang="ts">
import { ref } from 'vue'

const themeListHidden = ref(true)
function test() {
  themeListHidden.value = !themeListHidden.value
}
</script>

<template>
  <div>
    <span id="theme" @click="test">Theme</span>
    <ul :hidden="themeListHidden">
      <li>Default</li>
    </ul>
  </div>
  <div id="main">
    <section id="title">
      <h1>Lyndon's website</h1>
    </section>
    <section></section>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/rust">Rust</RouterLink>
      <RouterLink to="/csharp">C#/dotnet</RouterLink>
      <RouterLink to="/database">Databases</RouterLink>
      <RouterLink to="/web">Web-development</RouterLink>
      <RouterLink to="/construction">Construction</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
