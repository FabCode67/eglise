
const NavBar = () => {
  return (
    <div className='w-full top-0 fixed z-50'>
        <nav className='flex p-3 w-full enter text-center items-center my-auto justify-between bg-rose-600 z-50 text-black px-40'>
            <div className='logo flex'>
                <p className='flex text-3xl'>Eglise</p>
            </div>
            <div className='logo flex space-x-8 text-2xl'>
                <a className='flex' href={'/'}>Home</a>
                <a className='flex' href={'/#about'}>About</a>
                <a className='flex' href={'#ministries'}>Ministries</a>
                <a className='flex' href={'#seremonies'}>Sermonies</a>
                <a className='flex' href={'#blogs'}>Blogs</a>
                <a className='flex' href={'#contact'}>Contact</a>

            </div>
        </nav>
    </div>
  )
}

export default NavBar