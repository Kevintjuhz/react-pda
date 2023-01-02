function ProfileCard({title, handle, image}) {
    return (
        <>
            <img src={image} alt="pda logo"/>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </>
    )
}

export default ProfileCard;