import { defineStore } from "pinia";
import { ref, type Ref, type StyleValue } from "vue";

export const themeStore = defineStore("theme", () => {
  const textElements = ["h1", "h2", "h3", "h4", "h5", "label", "li", "p", "span"];
  const themeIndex = ref(-1);

  interface Theme {
    name: string;
    background: string;
    text: string;
    link: string;
    linkActive: string;
  }
  type statusKey = keyof Theme;

  const themes: Ref<Theme[]> = ref([]);

  const water: Theme = {
    name: "Water",
    background: "#083CSD",
    text: "#328CC1",
    link: "#D9B310",
    linkActive: "#FFFFFF",
  };
  themes.value.push(water);

  const currentTheme = ref("default");

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

  function addTheme(
    name: string,
    textColour: string,
    linkColour: string,
    LinkActiveColour: string,
  ) {
    themes.value.push({
      name: name,
      background: "#000000",
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