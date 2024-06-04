import { ref, type StyleValue } from 'vue'
import { themeStore } from '../stores/themeStore'

import { storeToRefs } from 'pinia'

export function elementColour(name: string): StyleValue {
  let themeStoreInstance = themeStore()
  let result = themeStoreInstance.getColourForElement(name)
  if (result == '') {
    return {}
  }
  return { color: result }
}
