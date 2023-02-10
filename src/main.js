import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faMagnifyingGlass,faChevronDown,faChevronUp,faUser,faGlobe,faBars,faQuoteLeft,faPinterest,faApple,faGooglePlay,faCaretDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
