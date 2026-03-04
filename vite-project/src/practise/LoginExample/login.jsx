import "./login.css";

export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="form-style">
                <label className="fw-bold rounded-4">Username</label>
                <input type="text" placeholder="Enter your username" />

                <label className="fw-bold rounded-3">Password</label>
                <input type="password" placeholder="Enter your password" />

                <button type="submit" className="rounded-4">Login</button>
            </form>
        </div>
    );
}
