import { react, combine, comments, ignores, imports, javascript, jsdoc, jsonc, markdown, node, sortPackageJson, sortTsconfig, stylistic, toml, typescript, unicorn, yaml } from '@antfu/eslint-config'

export default combine(
  ignores(['**/routeTree.gen.ts', '.vinxi/**/**', '.output/**/**']),
  javascript(),
  comments(),
  node(),
  jsdoc(),
  imports(),
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
