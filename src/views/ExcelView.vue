<script setup lang="ts">
import { elementColour } from "../themes/index";
import * as markdown from "../themes/markdown"

import mk from "../markdown/excel.md?raw"


const mkd = markdown.markDownInstance(mk).mkd

</script>

<template>
  <h2 :style="elementColour('h2')">My Excel experience</h2>
  <article id="contents" v-html="mkd">
  </article>
</template>
