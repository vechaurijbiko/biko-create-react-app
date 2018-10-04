const path = require('path')
const fs = require('fs')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// Añade información del componente a los nombres de los estilos
// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer(
  {
    // getDisplayName: function(filename, bindingName) {
    //   return bindingName
    // },
  }
)

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType, config) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.module.rules.push({
    test: [/\.ts$/, /\.tsx$/],
    use: [
      {
        loader: 'ts-loader',
        options: {
          // disable type checker - we will use it in fork plugin
          // transpileOnly: true,
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
    ],
    exclude: /node_modules/,
  })

  storybookBaseConfig.module.rules.push({
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: require.resolve('url-loader'),
    options: {
      limit: 10000,
      name: 'static/media/[name].[hash:8].[ext]',
    },
  })

  // Configuración copiada de client/webpack.make-config.js
  storybookBaseConfig.module.rules.push({
    test: [/\.svg$/i],
    use: 'raw-loader',
  })

  storybookBaseConfig.module.rules.push({
    test: [/\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/],
    loader: require.resolve('file-loader'),
    options: {
      name: 'fonts/[name].[ext]',
    },
  })

  storybookBaseConfig.module.rules.push({
    test: [/\.stories\.tsx$/],
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            parser: 'babylon',
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
            semi: true,
            singleQuote: true,
            trailingComma: 'all',
            bracketSpacing: true,
            jsxBracketSameLine: false,
            arrowParens: 'avoid',
          },
        },
      },
    ],
    enforce: 'pre',
  })

  storybookBaseConfig.resolve.extensions.push('.ts', '.tsx')

  storybookBaseConfig.resolve.plugins = [
    new TsconfigPathsPlugin(
      {
        // configFile: '../tsconfig.json',
      }
    ),
  ]

  if (configType !== 'PRODUCTION') {
    storybookBaseConfig.devtool = 'source-map'
  }

  return storybookBaseConfig
}
