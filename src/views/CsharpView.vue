<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">Some C# and .net projects</h2>
  <article>
    <h3 :style="elementColour('h3')">C# at Universy</h3>
    <p :style="elementColour('p')">C# is the first progamming language I learnt at university.
      I ended up using C# for the vast majority of my university assignments
    </p>
    <h4 :style="elementColour('h4')">A Calculator, with voice activation and sending browser history over network </h4>
    <p :style="elementColour('p')">
      As part of a job interview project I was tasked with making a calculator with our own unique twist.
      I came up with the idea of sharing history over the network.
    </p>
    <h4 :style="elementColour('h4')">MVC website</h4>
    <p :style="elementColour('p')">
      I made a similar website to this one with some example SQL in order to learn MVC concepts
    </p>
  </article>
  <article>
    <h3 :style="elementColour('h3')">F#</h3>
    <p :style="elementColour('p')"> After university I learnt F# initially
      this was to better understand LINQ as I did not have a great deal of
      experience with functional programming. I soon discovered how much I love the type system
      I ended doing some daily programmer challanges to explore some more advanced programs
    </p>
    <h4 :style="elementColour('h4')">Fsharp Worm Wars </h4>
    <p :style="elementColour('p')">
      A programming challange I found on
      <a
        href="https://www.reddit.com/r/dailyprogrammer/comments/6hm5j2/20170616_challenge_319_hard_worm_wars_2_network/">
        Reddit
      </a>
      This challange is to write software that mimmicks network that gets a virus and is patched.
      I wrote my solution using as much point free style as I could.
    </p>
  </article>
</template>
