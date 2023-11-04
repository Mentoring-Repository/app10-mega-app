const Homepage = ({links}) => {
    return (
        <main className="homepage d-flex flex-column justify-content-center align-items-center">
            <h3 className="w-50 text-center mb-4">Hello user, welcome to our Mega App. Below you can find a list of apps we developed:</h3>
            <ul>
                {links.map((link) => (
                    <li key={link.path} className="mb-2"><a href={link.path}>{link.text}</a></li>
                ))}
            </ul>
        </main>
    )
}

export default Homepage