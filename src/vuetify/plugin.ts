import '@mdi/font/css/materialdesignicons.css'
import '@/assets/vuetify/main.scss' // If customizing Vuetify sass variables

import { createVuetify } from 'vuetify'
import { lightTheme, darkTheme } from './theme'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
})
