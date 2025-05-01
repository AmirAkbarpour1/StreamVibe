import pkgNext from '@next/eslint-plugin-next'
import {
  react,
  combine,
  comments,
  imports,
  ignores,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  toml,
  typescript,
  unicorn,
  yaml,
} from '@antfu/eslint-config'

const { flatConfig: pluginNext } = pkgNext

const eslintConfig = combine(
  pluginNext.coreWebVitals,
  javascript(),
  comments(),
  node(),
  jsdoc(),
  imports(),
  ignores(),
  unicorn(),
  typescript(),
  stylistic(),
  sortPackageJson(),
  sortTsconfig(),
  react(),
  jsonc(),
  yaml(),
  toml(),
  markdown(),
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*', '../../*', './*'],
              message: 'Please use absolute imports instead of relative ones',
            },
          ],
        },
      ],
    },
  },
)

export default eslintConfig
