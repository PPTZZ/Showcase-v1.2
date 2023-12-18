
export default function Register() {
    return(
        <div>
            <img/>
            <div>
                <h1>Sign up</h1>
                <div>
                    <label>Name</label>
                    <br/>
                    <input
                        type='text'
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
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
                </div>
                <input
                    className="button"
                    type='submit'
                    value={'Sign up'}
                />
                <p>
                    {"Already have an account? Login"}
                </p>
            </div>
        </div>
    )
}
