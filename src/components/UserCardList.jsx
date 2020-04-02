import React from 'react';
import UserCard from './UserCard';

const UserCardList = props => {

    const { listOfAllUsers } = props;

    return(
        <div>
           { listOfAllUsers.map(eachUser => (
               <UserCard user={eachUser}
               />
           ))}    
        </div>
    )
    
}

export default UserCardList;