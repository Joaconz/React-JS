import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Links } from '../Links/Links'

const DropDown = () => {
  return (
    <NavDropdown
          id="nav-dropdown-dark-example"
          title="Products"
          menuVariant="white"
        >
            {Links.map((link)=>{
                <NavDropdown.Item >{link.title}</NavDropdown.Item>
                
            })}
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

    </NavDropdown>
  )
}

export default DropDown