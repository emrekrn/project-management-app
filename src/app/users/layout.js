import NavBar from "@/app/components/NavBar";

const UsersLayout = ({children}) => {
    return <>
    <NavBar/>
        {children}
    </>
}

export default UsersLayout;