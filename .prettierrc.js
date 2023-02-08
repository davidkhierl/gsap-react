module.exports = {
  plugins: [
    require('@trivago/prettier-plugin-sort-imports'),
  ],
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^[./]', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
