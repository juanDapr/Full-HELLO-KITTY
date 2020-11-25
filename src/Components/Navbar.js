import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton]= useState(true)

    const handleCLick= () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(() => {
        showButton();
      
    }, []);
    window.addEventListener('resize', showButton)
    return (
        <>
        <IconContext.Provider value={{color: 'fff'}}>
            <div className="navbar">
                <div className= "navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        
                        Hello Kitty
                    </Link>
                    <div className="menu-icon" onClick={handleCLick}>
                        {click ? <FaTimes/> :<FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className= 'nav-item'>
                            <Link to='/' className= 'nav-links' onClick={closeMobileMenu}>
                                Empleados
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to='/Clientes' className= 'nav-links' onClick={closeMobileMenu}>
                               Clientes
                            </Link>
                        </li>

                        <li className= 'nav-item'>
                            <Link to='/Ingredientes' className= 'nav-links' onClick={closeMobileMenu}>
                                Ingredientes
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/Pedidos' className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline">Pedidos</Button>
                                </Link>            
                            ) : (
                                <Link to='/Pedidos' className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" 
                                buttonSize="btn--mobile">Pedidos
                                </Button>
                                </Link>  
                            )}
                                                   
                        </li>    

                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
