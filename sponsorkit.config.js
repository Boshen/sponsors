import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'boshen',
    type: 'user',
  },
  opencollective: {},
  patreon: {},
  afdian: {},
  outputDir: '.',
  width: 800,
  formats: ['svg', 'png'],
  renderer: 'tiers',
  tiers: [
    {
      title: 'Backers',
      preset: tierPresets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 20,
      preset: tierPresets.base,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
  ],
})
