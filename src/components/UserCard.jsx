import React from 'react';

const UserCard = props => {

    const { avatar_url, name } = props;

    return(
        <div>
            <div>
                <img alt="avatar" src={avatar_url}/>
                <div className="userName">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard;