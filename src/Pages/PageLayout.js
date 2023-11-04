import NavBar from "../Components/NavBar/NavBar"

const PageLayout = ({links, children}) => {
    return (
        <>
            <NavBar links={links} />
            {children}
        </>
    )
}

export default PageLayout;