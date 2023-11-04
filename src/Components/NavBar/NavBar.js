import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/userSlice';

const NavBar = ({links}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value.displayName)
    return (
        <header className='d-flex justify-content-between align-items-center py-4 px-5'>
            <nav>
                <ul className='d-flex justify-content-around align-items-center p-0 m-0 gap-4'>
                    {links.map((link) => (
                        <li key={link.path}>
                            <a href={link.path}>{link.text}</a>
                        </li>
                    ))}

                </ul>
            </nav>
            <div className='align-self-end'>
                <p className='m-0 p-0'>Welcome, {user}.</p>
                <p>You can logout <span className='link-logout' onClick={() => dispatch(logout())}>here</span></p>
            </div>

        </header>
    )
}

export default NavBar