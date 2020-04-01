import React from 'react';
import UserCard from './UserCard';

const UserCardList = props => {
    
    const { userInfo } = props;

    const userInfoMap = userInfo.map(userInfo => {
        return(
            <div className="userPic" key={userInfo.login}>
                <UserCard
                    userInfo={userInfo}
                />
            </div>
        )}
               
    )};



export default UserCardList;