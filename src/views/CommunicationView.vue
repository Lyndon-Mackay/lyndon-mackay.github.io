<script setup lang="ts">
import { elementColour } from "../themes/index";
</script>

<template>
  <h2 :style="elementColour('h2')">Communication Tools</h2>
  <article>
    <h3 :style="elementColour('h3')">Graphviz</h3>
    <p :style="elementColour('p')">
      Graphviz is a quick and effective way to communicate how programs work to both technical and non-technical
      stakeholders.
      I have also used this to confirm my understanding of domain knowledge such as the construction proccess of doors
      and leadtimes
    </p>
    <hr>
    <h4 :style="elementColour('h4')">Explaining layout of a database system and how they are related</h4>
    <pre :style="elementColour('pre')">
      digraph G {
      &#9splines="FALSE";

      &#9node[style="filled"]


      &#9Live[color=green]
      &#9Dataproject[label="Project",color=yellow]
      &#9Test[color=blue]
      &#9Training[color=orange]

      &#9Dataproject -> Live[label="Synchronisation"]
      &#9Live -> {Test,Training}[label="Refresh"]

      }
    </pre>
    <img src="../assets/database.svg" alt="Output of layout graphviz" />
    <hr>

    <h4 :style="elementColour('h4')">Recreation of a graph I used to confirm my understanding of how honeycomb doors are
      created</h4>
    <pre :style="elementColour('pre')">
      digraph G {

      &#9node[style=filled,color=yellowgreen]

      &#9Start[label="Honeycomb base"]
      &#9Stiles[label="Stiles Added"]
      &#9Rails[label="Rails added"]
      &#9GlassFrame[label="Glass frame",shape=diamond]
      &#9Skins[label="Skins"]
      &#9Base
      &#9Routing[label="Routing"]
      &#9AddedVal[label="Added Value Variants"]

      &#9Start -> Stiles[label="Staple Stiles to Honeycomb base"]
      &#9Stiles -> Rails[label="Stable rails to Honeycomb base"]

      &#9Rails -> GlassFrame[label="Add support for glass (if added)"]

      &#9{Rails,GlassFrame} -> Base[label="Add lock block to hold door handle"]

      &#9Routing -> Skins[label="Route the skins"]
      &#9Skins -> Base[label="press skins against door"]

      &#9Base -> AddedVal[label="various other additions"]

      }
    </pre>
    <img src="../assets/honeycomb.svg" alt="Output of honeycomb graphviz" />
    <hr>
    <h4 :style="elementColour('h4')">Example of how I can explain my changes to a proccess in orange based of an example
      of retrofitting glass thickness validation in lots of copy and pasted code over a decade </h4>
    <pre style="elementColour('pre')">
      digraph G {

      &#9node[style=filled,color=gainsboro]
      &#9Customer[label="Customer with an order"]
      &#9ItemEntry[label="Item info is keyed"]
      &#9Creation[color=lightblue,label="ERP Creates Item"]
      &#9Components[color=lightblue,label="Components generated"]
      &#9Validation[color=lightblue,label="Dimensions of the product are validated"]
      &#9Warning[color=lightblue,label="User is warned but message can be missed/ignored"]
      &#9ERPready[color=lightblue,label="Item is ready to be used by ERP system"]

      &#9ProposedComponents[color=orange,label="Components generated"]
      &#9ProposedValidation[color=orange,label="Dimensions of the product are validated"]
      &#9PropoosedERP[color=orange,label="ERP Creates Item"]


      &#9Customer -> ItemEntry[color=blue]
      &#9ItemEntry -> Components[color=blue]

      &#9Components -> Creation[color=blue]
      &#9Creation -> Validation[color=blue]
      &#9Validation -> Warning[color=blue,label="If dimensions are invalid"]
      &#9Warning -> ERPready[color=blue,label="Can be ignored and item is valid within system"]
      &#9Validation -> ERPready[color=blue,label="If product is valid"]


      &#9ItemEntry -> ProposedComponents[color=orange]
      &#9ProposedComponents -> ProposedValidation[color=orange]
      &#9ProposedValidation -> ItemEntry[color=orange,label="Rejected if invalid"]
      &#9ProposedValidation -> PropoosedERP[color=orange,label="If valid then item will be created"]
      &#9PropoosedERP -> ERPready[color=orange]

      }
    </pre>
    <img src="../assets/erp.svg" alt="Output of ERP graphviz" />
    <hr>
  </article>
</template>
