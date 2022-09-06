import presetIcons from '@unocss/preset-icons/browser';
import initUnocssRuntime from '@unocss/runtime';

window.__unocss = {
  runtime: {
    ready: function() { return false }
  },
}

initUnocssRuntime({
  defaults: {
    presets: [
      presetIcons({
          cdn: 'https://esm.sh/'
      })
    ]
  },
  ready(runtime) {
      return false
  },
})