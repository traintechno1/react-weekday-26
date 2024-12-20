
export const User = ({user}) =>{
    return(
        <>
            <div className="user-container">
                <div>
                    Name: {user.name}
                </div>
                <div>
                    Email: {user.email}
                </div>
            </div>
        </>
    )
}