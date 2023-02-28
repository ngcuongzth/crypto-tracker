import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import ThemeProvider from './components/ThemeProvider'
import './index.css'
import AuthWrapper from './components/AuthWrapper/AuthWrapper'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>,
)
