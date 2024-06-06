<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">
    Web Development
  </h2>
  <article>
    <h3 :style="elementColour('h3')">This website is written using VueJs</h3>
    <p :style="elementColour('p')">As part of diversifying my skillset I learnt the vue framework,
      I have created this website as a playground for trying out various Vue and other web development practices

    </p>
    <p :style="elementColour('p')">Some Vue concepts this website uses</p>
    <ul>
      <li :style="elementColour('li')">List rendering</li>
      <li :style="elementColour('li')">Binding styles</li>
      <li :style="elementColour('li')">Routing </li>
      <li :style="elementColour('li')">State management with the user themes being saved, with Pinia</li>
      <li :style="elementColour('li')">Event handling</li>
      <li :style="elementColour('li')">Input bindings</li>
    </ul>
    <h4 :style="elementColour('h4')">CSS</h4>
    <p>This website CSS is entirely done by me, the colour scheme was chosen by a section of the rust website </p>
  </article>
  <article>
    <h3 :style="elementColour('h3')">Tauri app with Vue</h3>
    <p :style="elementColour('p')">My first tutorial project with Vue was to create a fictional commerce store in Tauri.
      This program features asynchronous loading of data along with state management keeping a shopping cart
    </p>
  </article>
  <article>
    <h3 :style="elementColour('h3')">Static site generator with Hugo</h3>
    <p :style="elementColour('p')">My first job out of university I worked for the networking team transferring data
      from a drupel site
      to markdown.
      The markdown data was used to along with a static site generator to be used with their new website
    </p>
  </article>

  <article>
    <h3 :style="elementColour('h3')"> University as part of my degree</h3>
    <p :style="elementColour('p')">As part of my bachelor's thesis I transferred a network analytics app to the web.
      additionally I have done various web assignments interacting with database using ajax along with serverside
      programming</p>
  </article>
</template>
