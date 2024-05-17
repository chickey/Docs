import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EPLOP Documentaion",
  description: "Documentation for all our software",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/Intro' },
      { text: 'About', link: '/about' },
      { text: 'Store', link: '/stores' }
    ],

    sidebar: [
      { text: 'Getting Started', link: '/Intro' },
      {
        text: 'Solar',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/solar-intro' },
          {
            text: 'Epever',
            collapsed: true,
            items: [
              { text: 'Getting Started', link: '/epever-start' },
              { text: 'Flashing', link: '/epever-flashing' },
              { text: 'Configuration', link: '/epever-config' },
              { text: 'ESPHOME', link: '/epever-ESPHOME' },
              { text: 'TroubleShooting', link: '/epever-troubleshooting' }
            ]
          },
          {
            text: 'Solis',
            collapsed: true,
            items: [
              { text: 'Getting Started', link: '/solis-start' },
              { text: 'ESPHOME', link: '/solis-ESPHOME' },
              { text: 'TroubleShooting', link: '/solis-troubleshooting' }
            ]
          },
          {
            text: 'Generic RS485 2pin',
            collapsed: true,
            items: [
              { text: 'Getting Started', link: '/2pin-start' },
              { text: 'ESPHOME', link: '/2pin-ESPHOME' },
              { text: 'TroubleShooting', link: '/2pin-troubleshooting' }
            ]
          },
          { text: 'Other models', link: '/api-examples' }
        ]
      },
      {
        text: 'USB KeepAlive',
        collapsed: false,
        items: [
          { text: 'SMD Fixed Version', link: '/USBKeepAliveSMD' },
          { text: 'KIT version', link: '/USBKeepAliveKIT' }
        ]
      },
      {
        text: 'Maker Prodcuts',
        collapsed: false,
        items: [
          {
            text: 'Brian Lough',
            collapsed: false,
            items: [
              { text: 'PowerBloughr', link: '/PowerBloughr' },
              { text: 'D1 Mini TFT Shield', link: '/D1-TFT' },
              { text: 'D1 Mini Nunchuck Shield', link: '/D1-Nunchuck' },
              { text: 'ESP32 Debug Shields', link: '/ESP32-debug' },
              { text: 'ESP32Matrix', link: '/ESP32Matrix' },
              { text: 'D1MiniMatrix', link: '/D1MiniMatrix' },
              { text: 'I2S Matrix', link: '/I2S-Matrix' }
              
            ]
          },
          {
            text: 'Larry',
            collapsed: true,
            items: [
              { text: 'Item C', link: '/item-c' },
              { text: 'Item D', link: '/item-d' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chickey' } ,
      { icon: "twitter", link: "https://twitter.com/eplop" },
      { icon: "discord", link: "https://discord.gg/J7GnxDRaHj" }
    ],
    search: {
      provider: 'local'
    }
  }
})
