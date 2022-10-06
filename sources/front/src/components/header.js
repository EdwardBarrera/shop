import {UserIcon,CartIcon} from './icons'

const Header = () => {
    return <>
        <header className="bg-gray-700 text-white">
            <div className="max-w-[1100px] mx-auto flex justify-between">
                <div>Shop</div>
                <nav>
                    <ul className='flex'>
                        <li className='mr-2'>
                            <span className="flex items-center"><CartIcon className="w-4 h-4"/> <span className='ml-1'>Cart</span></span>
                        </li>
                        <li>
                            <span className="flex items-center"><UserIcon className="w-4 h-4"/> <span className='ml-1'>Login</span></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}

export default Header