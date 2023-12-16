import {type PropString} from '../types'

import logo from '../logo.svg'

export default function NavBar({title}:PropString) {

  return (
    <div className='navbar navbar-dark bg-primary'>

     <div className='container'>

        <a href="/" className='navbar-brand'>
        <img src={logo} alt='React Logo' style={{width:'4rem'}}/>
       
        {/*Si titulo existe */}
        {title && <h1>{title}</h1>}
        </a>
     </div>

    </div>
);
}

