import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  storage: {
    github: {
      driver: 'github',
      repo: 'Ares-Chang/aword-data-package',
      branch: 'master',
      token: process.env.GITHUB_TOKEN,
    },
  },
})
