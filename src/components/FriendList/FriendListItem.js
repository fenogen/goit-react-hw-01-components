import React from 'react'
import PropTypes from 'prop-types'
import style from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={style.item}>
            {isOnline ? <span className={style.status__online}></span> : <span className={style.status__ofline}></span>}
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>
    )
}


FriendListItem.defaultProps = {
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem
