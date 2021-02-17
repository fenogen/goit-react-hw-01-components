import React from 'react'
import style from './Profile.module.css'
import PropTypes from 'prop-types'


const Profile = ({ name, tag, location, avatar, stats}) => {
    return(
        <div className={style.profile}>
            <div className={style.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={style.avatar} />
                <p className={style.name}>{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className={style.stats}>
                <li className={style.item}>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats['followers']}</span>
                </li>
                <li className={style.item}>
                    <span className="label">Views</span>
                    <span className="quantity">{stats['views']}</span>
                </li>
                <li className={style.item}>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats['likes']}</span>
                </li>
            </ul>
        </div>
        )
}
    
Profile.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
}

Profile.prototype = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Profile
