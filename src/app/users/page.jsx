import NavBar from "@/app/components/NavBar";

export default function page({children}) {

    return <>
        <NavBar />
        <h1>{children}</h1>
    </>
}