
import { elementColour } from "../themes/index";
import { onMounted, ref, watch } from "vue";
import { themeStore } from "../stores/themeStore";
import { storeToRefs } from "pinia";
import { marked } from 'marked'

interface HasColour {
  colour?: string
}


function themeChange() {

  const contents = document.querySelector("#contents")
  if (contents == null || !(contents instanceof HTMLElement)) {
    return
  }

  elementChildrenStyle(contents)

}

function elementChildrenStyle(el: HTMLElement) {

  for (let index = 0; index < el.children.length; index++) {

    const element = el.children[index];

    if (element instanceof HTMLElement) {
      elementChildrenStyle(element)
      const tag = element.tagName.toLowerCase()


      const newElementColour = (elementColour(tag) as HasColour).colour

      //revert to CSS
      if (newElementColour == undefined) {
        element.style.color = ""
        return
      }

      element.style.color = newElementColour

    }
  }
}



export const markDownInstance = (mk: string) => {


  const themeStoreInstance = themeStore();
  const { themes, currentTheme } = storeToRefs(themeStoreInstance);
  const watchHandle = watch(currentTheme, () => {
    themeChange()
  });
  const mark = marked(mk)
  return { mkd: ref(marked(mk)), watcher: watchHandle }
}

