import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import theme from './themes/theme.jsx'
import store from './features/store.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme} >
       <App />
    </ThemeProvider>  
    </Provider>
  </StrictMode>,
)
