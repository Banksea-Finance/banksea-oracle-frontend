export function isTouchScreenDevice() {
  return ('ontouchstart' in window || navigator.maxTouchPoints)
}
