import ReactDom from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <App />
</BrowserRouter>
   
)
