import React from 'react'

import {FaGreaterThan} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NbStartColumn = () => {
  return(
    <>
        <div className="nb-start-column">
            <div className='rowa'>
                <div className="column-second padder-mobile">
                    <div className="inner-left">
                        <div className="inner-left-top-nav-header">
                            Notice Board
                        </div>
                        <div className="rowa">
                            <div className="column-notice-body">
                                <div className="inner-left-body">
                                    <ul className="left-nav">
                                        <li>
                                            <NavLink to={'/notice'}> <FaGreaterThan />New Notice</NavLink>
                                            
                                        </li>
                                        <li>
                                            <NavLink to={'/'}> <FaGreaterThan />Home </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/admprocedure'}> <FaGreaterThan />Admission</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/abuscus'}> <FaGreaterThan />Facilities</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/contectus'}> <FaGreaterThan />Contect Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NbStartColumn
