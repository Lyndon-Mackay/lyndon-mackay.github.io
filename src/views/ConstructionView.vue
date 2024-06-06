<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">My experience with construction/ERP systems</h2>
  <article>
    <h3 :style="elementColour('h3')">Timber doors</h3>
    <p :style="elementColour('p')">I have 5 years of experience primarily helping maintain an ERP system for a timber
      door company. I learnt quite a bit about the process of how a door is constructed having walked around the factory
      a few
      times
    </p>
    <h3 :style="elementColour('h3')">Aluminum windows,doors,showerscreens and wardrobes</h3>
    <p :style="elementColour('p')">
      I have a couple of years experience with the construction of Aluminum building products.
    </p>
    <h3 :style="elementColour('h3')"> ERP Systems </h3>
    <p :style="elementColour('p')"> I have maintained many areas of an ERP system, including order-entry, manufacturing
      bill of materials,pricing,labour systems and production </p>
  </article>
</template>
