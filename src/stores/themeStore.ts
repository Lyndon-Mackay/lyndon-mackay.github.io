import { defineStore } from "pinia";
import { ref, type Ref, type StyleValue } from "vue";

export const themeStore = defineStore("theme", () => {
  const textElements = ["h1", "h2", "h3", "h4", "h5", "label", "li", "p", "pre", "span"];
  const themeIndex = ref(-1);

  interface Theme {
    name: string;
    background: string;// incase I add dynamic background
    text: string;
    link: string;
    linkActive: string;
  }
  type statusKey = keyof Theme;

  const themes: Ref<Theme[]> = ref([]);

  const currentTheme = ref("default");

  initialThemes()
  function setCurrentTheme(newThemeName: string) {
    currentTheme.value = newThemeName;
    themeIndex.value = themes.value.findIndex((x) => x.name == newThemeName);
  }

  function classifyElement(elementName: string): statusKey | null {
    if (textElements.findIndex((x) => x == elementName) != -1) {
      return "text";
    }
    if (elementName == "a") {
      return "link";
    }

    return null;
  }

  function getColourForElement(elementName: string): string {
    if (themeIndex.value == -1) {
      return "";
    }

    const theme = themes.value[themeIndex.value];

    const classification = classifyElement(elementName);

    if (classification == null) {
      return "";
    }

    const color = theme[classification];

    return color;
  }

  function getLinkActiveColour(): StyleValue {
    if (themeIndex.value == -1) {
      return {};
    }

    const theme = themes.value[themeIndex.value];
    return { color: theme.linkActive };
  }

  function initialThemes() {

    const water: Theme = {
      name: "Water",
      background: "#083CSD",
      text: "#328CC1",
      link: "#D9B310",
      linkActive: "#FFFFFF",
    };
    themes.value.push(water);

    const roy: Theme = {
      name: "ROY",
      background: "#2a3439",
      text: "red",
      link: "orange",
      linkActive: "Yellow"
    }
    themes.value.push(roy)

  }

  function addTheme(
    name: string,
    textColour: string,
    linkColour: string,
    LinkActiveColour: string,
  ) {
    themes.value.push({
      name: name,
      background: "#000000", /* background not chanagable */
      text: textColour,
      link: linkColour,
      linkActive: LinkActiveColour,
    });
    currentTheme.value = name;
    themeIndex.value;
    themes.value.length - 1;
  }

  return {
    themes,
    currentTheme,
    setCurrentTheme,
    getColourForElement,
    getLinkActiveColour,
    addTheme,
  };
});
