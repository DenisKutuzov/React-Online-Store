import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { HashRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <HashRouter>
 <App />
  </HashRouter>
)
