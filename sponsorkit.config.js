import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'boshen',
    type: 'user',
  },
  opencollective: {
    slug: "oxc",
    type: 'collective'
  },
  outputDir: '.',
  width: 800,
  formats: ['svg', 'png', 'webp', 'json'],
  renderer: 'tiers',
  prorateOnetime: true,
  tiers: [
    {
      title: 'Backers',
      preset: tierPresets.small,
    },
    {
      title: 'Supporters',
      monthlyDollars: 20,
      preset: tierPresets.base,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 200,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.xl,
    },
  ],
})
