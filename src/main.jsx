import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userSelectSlice from './features/userSelect.js'
import optionSelectSlice from './features/optionSelect.js'
import confirmSelectSlice from './features/confirmSelect.js'
import './index.css'
import './stylesheets/ipodstyle.scss'


const store = configureStore({
  reducer: {
    userSelect: userSelectSlice,
    optionSelect: optionSelectSlice,
    confirmSelect: confirmSelectSlice
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
