
export default function Login() {
    return(
        <div>
            <img/>
            <div>
                <h1>Login</h1>
                <div>
                    <label>
                        Email</label>
                    <br/>
                    <input
                        type='email'
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input
                        type= 'password'
                        required
                    />
                    <p>
                        {"Forgot your password?"}
                    </p>
                </div>
                    <input
                        type='submit'
                        value={'Login'}
                    />
                    <p>
                        {"Don't have an account? Sign up"}
                    </p>
            </div>
        </div>
    )
}