import { AuthenticationButton } from "./auth";

export const Nav: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <AuthenticationButton />
            </div>
        </nav>
    )
}