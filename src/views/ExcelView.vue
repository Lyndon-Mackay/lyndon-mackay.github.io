<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">My Excel experience</h2>
  <article>
    <h3 :style="elementColour('h3')">Linking Vendor data with ERP data</h3>
    <p :style="elementColour('p')">
      Two common scenarios have occured when vendors had changes we needed to address in our ERP system
    </p>
    <ol>
      <li :style="elementColour('li')"> Vendors had a change in pricing, so the costs need to be updated</li>
      <li :style="elementColour('li')">Vendors had a product rationilisation, thereby removing many items from their
        catalogue </li>
    </ol>
    <p :style="elementColour('p')">The data was presented to me in an excel spreadsheet, I would then use xlookups on
      upcs numbers or item vendor codes to get the ERP item numbers.
      After I found the information I was looking for I would then create a new upload sheet to implement the changes
    </p>
    <h3 :style="elementColour('h3')">Presenting Large (proposed) changes to ERP Experts</h3>
    <p :style="elementColour('p')">
      Sometimes the easiest way to explain changes or confirm your understanding is to present the changes, I often used
      excel for just doing that as most non-technical users can intuitively understand excel
    </p>
    <h3 :style="elementColour('h3')"> Conditional Formatting</h3>
    <p :style="elementColour('p')">Automatically highlighting changes of interest can help users know where to look and
      see results of the changes. I have setup conditional formatting so it can achieve outcomes such as identify
      duplicate data (sometimes multiple column combinations need to be unique),Highlight dates as they come up and due
      dates </p>
  </article>
</template>
