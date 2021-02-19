import React from 'react'
import PropTypes from 'prop-types'
import style from './FriendList.module.css';
import FriendListItem from './FriendListItem'

import friends from '../../database/friends.json'
console.log(friends)

const FriendList = ({friends}) => {
    return (
        <ul class={style.friend__list}>
            <FriendListItem/>
        </ul>
    )
}

FriendList.propTypes = {

}

export default FriendList
