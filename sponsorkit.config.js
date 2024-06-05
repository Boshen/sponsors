import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'boshen',
    type: 'user',
  },
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
      monthlyDollars: 50,
      preset: tierPresets.base,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 250,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.xl,
    },
    // {
      // title: 'Platinum Sponsors',
      // monthlyDollars: 2000,
      // preset: tierPresets.large,
    // },
    // {
      // title: 'Diamond Sponsors',
      // monthlyDollars: 4000,
      // preset: tierPresets.xl,
    // },
  ],
})
