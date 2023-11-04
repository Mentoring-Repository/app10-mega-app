const AuthLayer = ({children}) => {
    const isLogged = localStorage.getItem('logged');

    if(isLogged === 'true' || window.location.pathname === '/login')
        return children;
    else window.location.href = '/login';
}

export default AuthLayer;