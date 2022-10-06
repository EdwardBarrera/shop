import { Link } from 'react-router-dom'
import {UserIcon,CartIcon} from './icons'

const Header = () => {
    return <>
        <header className="bg-gray-700 text-white py-5">
            <div className="max-w-[1100px] mx-auto flex justify-between">
                <Link to="/">SHOP</Link>
                <nav>
                    <ul className='flex'>
                        <li className='mr-3'>
                            <Link to="/cart" className="flex items-center"><CartIcon className="w-5 h-5"/> <span className='ml-1'>Cart</span></Link>
                        </li>
                        <li>
                            <Link to="/login" className="flex items-center"><UserIcon className="w-5 h-5"/> <span className='ml-1'>Sign in</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}

export default Header