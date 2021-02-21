import React from 'react'
import PropTypes from 'prop-types'
import style from './FriendList.module.css';
import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => {
    return (
        <ul className={style.friend__list}>
            {friends.map(friend => (
                <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array
}

export default FriendList
