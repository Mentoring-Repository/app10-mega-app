import './NavBar.css';

const NavBar = ({links}) => {
    return (
        <header className='d-flex justify-content-between align-items-center py-4 px-5'>
            <nav>
                <ul className='d-flex justify-content-around align-items-center p-0 m-0 gap-4'>
                    {links.map((link) => (
                        <li>
                            <a href={link.path}>{link.text}</a>
                        </li>
                    ))}
                    
                </ul>
            </nav>
            <p className='align-self-end m-0 p-0'>Welcome, username</p>
        </header>
    )
}

export default NavBar