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
  routeRules: {
    '**': {
      cors: true, // Enable CORS for all routes
      // headers: {
      //   'Access-Control-Allow-Origin': '*', // Access restrictions can be set
      // },
    },
  },
})
