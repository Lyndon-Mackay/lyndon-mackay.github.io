
import { elementColour } from "../themes/index";
import { onMounted, ref, watch } from "vue";
import { themeStore } from "../stores/themeStore";
import { storeToRefs } from "pinia";
import { marked } from 'marked'
import mk from "../markdown/home.md?raw"




function themeChange() {
  const thing = document.querySelector("#contents")
  if (thing == null) {
    return
  }

  for (let index = 0; index < thing.children.length; index++) {

    const element = thing.children[index];
    const tag = element.tagName.toLowerCase()

    element.style.color = elementColour(tag).color
  }
}



export const markDownInstance = () => {

  const themeStoreInstance = themeStore();
  const { themes, currentTheme } = storeToRefs(themeStoreInstance);
  const watchHandle = watch(currentTheme, () => {
    themeChange()
  });
  onMounted(() => {
    themeChange()
  }
  )
  return { mkd: ref(marked(mk)), watcher: watchHandle }
}

