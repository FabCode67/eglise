import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-full top-0 fixed '>
        <nav className='flex p-3 w-full enter text-center items-center my-auto justify-between bg-orange-400 text-white'>
            <div className='logo flex'>
                <p className='flex'>Eglise</p>
            </div>
            <div className='logo flex space-x-8 text-2xl'>
                <Link className='flex' to={'/'}>Home</Link>
                <Link className='flex' to={'#ministres'}>Ministries</Link>
                <Link className='flex' to={'#seremonies'}>Sermonies</Link>
                <Link className='flex' to={'#blogs'}>Blogs</Link>
                <Link className='flex' to={'#contact'}>Contact</Link>

            </div>
        </nav>
    </div>
  )
}

export default NavBar