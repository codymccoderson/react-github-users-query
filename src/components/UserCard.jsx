import React from 'react';

const UserCard = props => {

    const { avatar_url, name } = props.user;

    return(
            <div>
                <img alt="avatar" src={avatar_url}/>
                <div className="userName">
                    <p>{name}</p>
                </div>
            </div>
    )
}

export default UserCard;