<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">Regular Expressions</h2>
  <article>
    <h3 :style="elementColour('h3')">Scanning through user presentable data</h3>
    <p :style="elementColour('p')">
      When users submit errors in their reports it can be located alongside some data in a consistent form but
      constantly changing in very large reports where you have a replicable source of errors a regular expression can be
      useful for jumping to the next error or helping confirm a solutions solves multiple errors
    </p>
    <h3 :style="elementColour('h3')">Duplicating code changes</h3>
    <p :style="elementColour('p')">
      Sometimes lots of method calls need to be changed in a very large file or over a folder. Two major examples of
      this are
    </p>
    <ol>
      <li :style="elementColour('li')">Adding logging to lots of variable assignments for the so dev team can see which
        code is triggered </li>
      <li :style="elementColour('li')">Changing method calls to use a newly created replacement that takes different
        arguments. I needed to do this as logic was moved further ahead in the pipleline </li>
    </ol>
    <p :style="elementColour('p')">VScode features a preview of the replacement result so changes can all be looked at
      before they are executed </p>
  </article>
</template>
