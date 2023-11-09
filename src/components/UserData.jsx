const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id,image, firstName, lastName,gender, email, username, domain, ip, university} = curUser;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td><img src={image} height={50} width={50}/></td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{gender}</td>
                            <td>{email}</td>
                            <td>{username}</td>
                            <td>{domain}</td>
                            <td>{ip}</td>
                            <td>{university}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;