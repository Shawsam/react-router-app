import React from 'react';
import { NavLink } from 'react-router-dom';
import Page from './page'

const CloumHeader = ({title, target, haspage, total, current, onChange}) =>{
	return(
       <div className="title">
          <span className="pullLeft name">
             <NavLink to={target} >{title}</NavLink>
          </span>
          <span className="pullRight pageBox">
             { haspage && <Page total={total} current={current} onChange={onChange} />}
          </span>
        </div>
	)
}

export default CloumHeader
		        


