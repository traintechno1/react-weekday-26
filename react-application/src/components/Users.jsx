

export const Users = () =>{
    let userDetails = [
        {
            first_name: 'Dipika',
            last_name: 'Sugandh',
            email: 'dipika@gmail.com',
            mobile: 6685568463
        },
        {
            first_name: 'Jalim',
            last_name: 'Chakma',
            email: 'jalim@gmail.com',
            mobile: 9876789867
        },
        {
            first_name: 'Dipika',
            last_name: 'Sugandh',
            email: 'dipika@gmail.com',
            mobile: 6685568463
        },
        {
            first_name: 'Jalim',
            last_name: 'Chakma',
            email: 'jalim@gmail.com',
            mobile: 9876789867
        },
        {
            first_name: 'Dipika',
            last_name: 'Sugandh',
            email: 'dipika@gmail.com',
            mobile: 6685568463
        },
        {
            first_name: 'Jalim',
            last_name: 'Chakma',
            email: 'jalim@gmail.com',
            mobile: 9876789867
        },
        {
            first_name: 'Dipika',
            last_name: 'Sugandh',
            email: 'dipika@gmail.com',
            mobile: 6685568463
        },
        {
            first_name: 'Jalim',
            last_name: 'Chakma',
            email: 'jalim@gmail.com',
            mobile: 9876789867
        },
        {
            first_name: 'Dipika',
            last_name: 'Sugandh',
            email: 'dipika@gmail.com',
            mobile: 6685568463
        },
        {
            first_name: 'Jalim',
            last_name: 'Chakma',
            email: 'jalim@gmail.com',
            mobile: 9876789867
        },
]

    return(
        <>
            {
                userDetails.map((user, index)=>{
                    return(
                        <div key={index}>
                            <div>Name: {user.first_name} {user.last_name}</div>
                            <div>Email: {user.email}</div>
                            <div>Mobile: {user.mobile}</div>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}