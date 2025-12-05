import userImg from "../../../assets/image/user.png"

export const ProfileImg = ({profileImg}) => {
    return (
        <>
            <img width="250" src={profileImg ? profileImg : userImg} alt="" />

        </>
    )
}
