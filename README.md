# reverse-color-loader

是一个 webpack loader，可以使项目中的设置的颜色（如color, background等）反转。

## Getting Started

To begin, you'll need to install <code>reverse-color-loader</code>:

```shell
npm install --save-dev reverse-color-loader
```

Then add the plugin to your webpack config. For example:

### webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?|css|less|sass)/,
        use: 'reverse-color-loader',
      },
    ],
  },
};
```
