import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const themeStore = defineStore('theme', () => {
  const textElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span']
  const themeIndex = ref(-1)

  interface Theme {
    name: string
    background: string
    text: string
    link: string
    linkActive: string
    linkHover: string
  }
  type statusKey = keyof Theme

  const themes: Ref<Theme[]> = ref([])

  const water: Theme = {
    name: 'Water',
    background: '#083CSD',
    text: '#328CC1',
    link: '#D9B310',
    linkActive: '#FFFFFF',
    linkHover: '#CDS360'
  }
  themes.value.push(water)

  const currentTheme = ref('default')

  function setCurrentTheme(newThemeName: string) {
    currentTheme.value = newThemeName
    themeIndex.value = themes.value.findIndex((x) => x.name == newThemeName)
  }

  function classifyElement(elementName: string): statusKey | null {
    if (textElements.findIndex((x) => x == elementName) != -1) {
      return 'text'
    }
    if (elementName == 'a') {
      return 'link'
    }

    return null
  }

  function getColourForElement(elementName: string): string {
    if (themeIndex.value == -1) {
      return ''
    }

    const theme = themes.value[themeIndex.value]

    const classification = classifyElement(elementName)

    if (classification == null) {
      return ''
    }

    const color = theme[classification]

    return color
  }

  function getLinkActiveColour() {
    if (themeIndex.value == -1) {
      return ''
    }

    const theme = themes.value[themeIndex.value]
    return theme.linkActive
  }

  return { themes, currentTheme, setCurrentTheme, getColourForElement, getLinkActiveColour }
})
