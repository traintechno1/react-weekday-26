import { useNavigate } from "react-router-dom";

export const User = ({user}) =>{
    const navigate = useNavigate();
    const openPosts = (id) => {
        navigate(`/posts/${id}`);
    }

    return(
        <>
            <div className="user-container">
                <div>
                    <span className="label">Username:</span> {user.username}
                </div>
                <div>
                    <span className="label">Name:</span> {user.name}
                </div>
                <div>
                    <span className="label">Email:</span> {user.email}
                </div>
                <div>
                    <span className="label">Phone:</span> {user.phone}
                </div>
                <div>
                    <span className="label">Website:</span> {user.website}
                </div>

                <div>
                    <h6 className="h6">Address</h6>
                    <div>
                        <span className="label">Suite:</span> {user.address.suite}
                    </div>
                    <div>
                        <span className="label">Street:</span> {user.address.street}
                    </div>
                    <div>
                        <span className="label">City:</span> {user.address.city}
                    </div>
                    <div>
                        <span className="label">ZipCode:</span> {user.address.zipcode}
                    </div>
                </div>

                <div>
                    <h6 className="h6">Company</h6>
                    <div>
                        <span className="label">Name:</span> {user.company.name}
                    </div>
                    <div>
                        <span className="label">Catch </span>Phrase: {user.company.catchPhrase}
                    </div>
                    <div>
                        <span className="label">Description:</span> {user.company.bs}
                    </div>
                </div>

                <div className="center-btn">
                    <button onClick={() => openPosts(user.id)} className="btn btn-secondary">See Posts</button>
                </div>
            </div>
        </>
    )
}