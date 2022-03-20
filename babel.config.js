module.exports = {
  presets: [
    ["@babel/preset-env",{"useBuiltIns": "usage", "corejs": 3}],
    "@babel/typescript"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties", 
    "@babel/plugin-transform-typescript"
  ]
}
