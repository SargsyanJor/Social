import { createRoot } from 'react-dom/client'

import App from './app/App.jsx'
import { store } from './store/store.js'



createRoot(document.getElementById('root')).render(
    <App />
)


window.store = store

