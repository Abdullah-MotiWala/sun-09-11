function LogoutButton() {
    return <button>Logout</button>
}
export function LoginButton() {
    return <button>Login</button>
}
function Navbar() {

    return (
        <div>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
        </div>
    )
}
export { LogoutButton as CallButton }
export default Navbar