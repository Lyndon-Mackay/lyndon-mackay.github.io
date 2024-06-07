<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">Communication Tools</h2>
  <article>
    <h3 :style="elementColour('h3')">Graphviz</h3>
    <p :style="elementColour('p')">
      Graphviz is a quick and effective way to communicate how programs work to both technical and non-technical
      stakeholders.
      I have also used this to confirm my understanding of domain knowledge such as the construction proccess of doors
      and leadtimes
    </p>
  </article>
</template>
