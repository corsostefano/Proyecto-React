import { useState } from "react"
import { Link } from "react-router-dom"
import { MenuItems } from "../MenuItems/MenuItems"

const Dropdown = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
        <span className="material-icons arrow_drop_up ">arrow_drop_up</span>
        <ul onClick={handleClick} className={click ? 'dropdown__menu clicked' : 'dropdown__menu'} >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.path } onClick={() => setClick(false)}><button className="button__category"> {item.title}</button></Link>
              </li>
            )
          })}
        </ul>
    </>
  )
}
export default Dropdown