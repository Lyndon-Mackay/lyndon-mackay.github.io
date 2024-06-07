<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">A CV in website form</h2>
  <article>
    <h3 :style="elementColour('h3')">
      Education
    </h3>
    <p :style="elementColour('p')">
      Bachelor's degree in Computer and Mathematical Sciences
    </p>
    <h3 :style="elementColour('h3')">Experience</h3>
    <p :style="elementColour('p')">
      An experienced programmer especially in the context of maintaining an ERP system.<br>
      I have programmed in many programming languages including C#, F#, Java, Rust, Javascript, Haskell.<br>
      knowledgable about business operations in a construction and warehousing context.<br>
    </p>
    <h3 :style="elementColour('h3')">Qualities </h3>

    <p :style="elementColour('p')">
      I am strongly driven to make systems as easy to use for the user as possible I constantly ask myself at everystep
      in the interaction if the user is getting value from it.<br>
      From a programming standpoint I like using data types in a way to architect code as neatly as I can my favourate
      adage in regards to programming is "Make illegal states unrepresentable"<br>
      Of course strict deadlines may not make this possible but I have a habit of returning to make improvements
    </p>

  </article>
</template>
