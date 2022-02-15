import {
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_LOADER,
  HIDE_LOADER
} from './appActionsTypes'

export function showAlert(text) {
  return {
      type: SHOW_ALERT,
      payload: text
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}
