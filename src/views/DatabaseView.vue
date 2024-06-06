<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>
<template>
  <h2 :style="elementColour('h2')">My database experience</h2>
  <article>
    <h3 :style="elementColour('h3')">Relational database</h3>
    <h4 :style="elementColour('h4')">ABL Progress</h4>
    <p :style="elementColour('p')">Abl progress is a relational database management system</p>
    <p :style="elementColour('p')">I have used this progamming lanaguage for over 5 years</p>
    <ul>
      <li :style="elementColour('li')">Extracting data for stakeholders</li>
      <li :style="elementColour('li')">Creating new functionality </li>
      <li :style="elementColour('li')">Fixing issues with the ERP system</li>
      <li :style="elementColour('li')">Improving validation logic</li>
      <li :style="elementColour('li')">Removing data</li>
    </ul>
    <h4 :style="elementColour('h4')">How ABL progress maps to SQL</h4>
    <p :style="elementColour('p')"> ABL progress and SQL are both relational programming languages.<br>
      ABL tends to be more imperative and less concise then SQL.<br>
      ABL progress tends to handle application data as
      well.
    </p>
    <h5 :style="elementColour('h5')">ABL progress</h5>
    <pre>
      /* ABL Progress code */
      DEFINE TEMP-TABLE ttOutput
      &#9DEFINE FIELD code LIKE warehouse.code
      &#9DEFINE FIELD item-no LIKE item.item-no
      &#9DEFINE FIELD item.name LIKE item.name
      &#9DEFINE FIELD num-in-stock LIKE item.num-in-stock
      .

      /* Print headers I did write a function to generate based on temp-table */
      EXPORT DELIMITER "Warehouse-code" "item-no" "item-name" "number in stock"
      FOR EACH warehouse WHERE can-do("LM,LX",warehouse.code) NO-LOCK:
      &#9FOR EACH item where item.warehouse-code EQ warehouse.code NO-LOCK:
      &#9&#9CREATE ttOutput.
      &#9&#9BUFFER-COPY warehouse ttOutput.
      &#9&#9BUFFER-COPY item ttOutput.
      &#9&#9EXPORT DELIMITER "," ttOutPut
      &#9END.
      END.
    </pre>
    <h5 :style="elementColour('h5')">SQL</h5>
    <pre>
      -- Equivalent SQL CODE
      SELECT warehouse.code item.item-no item.name item.num-in-stock
      FROM warehouse
      INNER JOIN item ON wareshouse.code = item.warehouse-code
    </pre>
  </article>

  <article>
    <h3 :style="elementColour('h3')">SQL </h3>
    <p :style="elementColour('p')">I have used mySQL at university for my various assigments and had it interop with
      websites.
      I have also used T-SQL as part of my database courses
    </p>
  </article>
</template>
