
export default function Profile() {
    return(
        <>
            <nav>
                <img src='./Icons/logo.svg' alt='Logo'/>
                <img src='./Icons/bell icon.svg' alt='subscriibe bell'/>
                <p>Log Out</p>
            </nav>
            <div>
                <div>
                </div>
                <div>
                    <div>
                        <img src='./Images/Profile Picture.svg'/>
                        <p>{"Jackson Brown"}</p>
                        <p>{"Web Developer"}</p>
                        <a href='mailto:fakemail@yopmail.com'>
                            <div>
                                <img src='./Icons/mail.svg' />
                                <p>{"email"}</p>
                            </div>
                        </a>
                        <div>
                            <img src='./Icons/location_on.svg'/>
                            <p>{"locaton"}</p>
                        </div>
                        <div>
                            <button><img src="./Icons/edit.svg"/>Edit Profile</button>
                            <p>Member since: {"date"}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <nav>
                            <p>Projects</p>
                                <button>
                                    <img src='./Icons/add.svg'/>New project
                                </button>
                            </nav>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}