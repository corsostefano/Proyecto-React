import {BrowserRouter} from "react-router-dom"
import Main from "../components/Main/Main"
import NavBars from "../components/NavBars/NavBars"

const RouterApp = () => {
  return (
    <BrowserRouter>
        <NavBars/>  
        <Main/>
    </BrowserRouter>
  )
}
export default RouterApp