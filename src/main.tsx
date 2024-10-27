import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Button from './atoms/Button/Button.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <div className="header" >
      <select name="select your type" id="">
        <option value="first 1">  shreya is</option>
        <option value="first 1">  fatty</option>
        <option value="first 1">  overweight</option>
        <option value="first 1">  sofa</option>
        <option value="first 1">  truck</option>
      </select>
    </div> */}
    <Button/>
    <App />
  </StrictMode>,
)
