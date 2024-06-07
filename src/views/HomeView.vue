<script setup lang="ts">
import { elementColour } from "../themes/index";
import * as markdown from "../themes/markdown"

const mkd = markdown.markDownInstance().mkd
</script>


<template>

  <h2 :style="elementColour('h2')"> A CV in website form</h2>
  <article id="contents" v-html="mkd"></article>

</template>
