import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'switch-animation': 'transition duration-300',
    'bg-base': 'bg-#e8e9eb dark:bg-#161616 switch-animation',
    'bg-header': 'bg-#ffffff dark:bg-#1a1a1a switch-animation',
    'color-base': 'text-#363b45 dark:text-#878787 switch-animation',
    'color-header':
      ' text-#878c95 dark:text-#6c6c6c hover:text-#000000 dark:hover:text-#ffffff switch-animation',
    'border-header': 'border-1 border-solid dark:border-#323232',
    'color-band': 'text-#000000 dark:text-#ffffff font-800 switch-animation',
    'color-icon': 'stroke-#000 dark:stroke-#fff',
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ],
})
