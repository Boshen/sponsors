import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'boshen',
    type: 'user',
  },
  opencollective: {
    slug: "boshen",
    type: 'person'
  },
  outputDir: '.',
  width: 800,
  formats: ['svg', 'png'],
  renderer: 'tiers',
  tiers: [
    {
      title: 'Backers',
      preset: tierPresets.base,
    },
    {
      title: 'Super Generous',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 250,
      preset: tierPresets.xl, // change this to a smaller tier once we have gold sponsors
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
