<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">A selected list of Rust project I have done</h2>
  <article>

    <h3 :style="elementColour('h3')">Formatter for the Abl Progress language</h3>
    <p :style="elementColour('p')"> Currently the ABL Progress langauge does not have a formatter.
      I noticed that most of our large programs had incosistent indenting,which made tracking branching code and
      procedures(functions) difficult.
      After spending considerable reformatting the code by hand to improve maintanability, I looked at general purpose
      code formatters however none of them worked with able progress</p>

    <p>
      After coming across the Rust parsing framework <a href="https://pest.rs/"> Pest</a>, I started implementing an MVP
      version of the formatter.
      Unfortanately the grammar of the progress language is not open source, I managed to recreate an approximate subset
      of the language we tend to use.
    </p>
    <p>
      This program in combination with merging helped improve the readability of programs that had for years been
      misaligned and caused confusion slowing down our changes
    </p>
  </article>

  <article>
    <h3 :style="elementColour('h3')">Ecology</h3>
    <p :style="elementColour('p')">As part of my learning of the rust programming language I attempted this programming
      challange <a
        href="https://www.reddit.com/r/dailyprogrammer/comments/27h53e/662014_challenge_165_hard_simulated_ecology_the/">On
        reddit</a>
    </p>
    <p :style="elementColour('p')"> The short summary is make a forest that on a 2d array(chessboard like grid) and
      simulate the forest for 400
      years.
      The short summary is.
    </p>
    <p :style="elementColour('p')">Each square can contain</p>
    <ul>
      <li :style="elementColour('li')">Trees, which will be at one of these life stages, sapling, Tree or Elder</li>
      <li :style="elementColour('li')">LumberJack which will cut down mature and elder trees </li>
      <li :style="elementColour('li')">Bears which will take out lumberJacks</li>
    </ul>
    <p :style="elementColour('p')">Each entity present has its own moving, spawning and despawning rules, with monthly
      changes and a yearly census
    </p>
    <p :style="elementColour('p')">In additon to this I refactored the program so it can be optionally run
      <em>muliThreaded</em>
    </p>
  </article>

  <article>
    <h3 :style="elementColour('h3')">Various command line tools</h3>
    <p> I was often supplied with data in a consistent format the user could print and edit and needed to upload
      in a different format, the user often edited a file that was easy to read but more challanging to parse.
      I made command line tools to quickly run in vscode to convert the file in a way that could be uploaded </p>
  </article>
</template>
