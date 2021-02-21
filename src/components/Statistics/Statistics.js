import React from 'react'
import style from './Statistics.module.css'

import PropTypes from 'prop-types'

import Template from './Template'


const colors = ['purple','rebeccapurple','tomato', 'violet', 'royalblue']

const Statistics = ({title, statistic}) => {

    return (
        <section className={style.statistics}>

            {title && <h2 className={style.title}>{title}</h2>}   {/*Рендер по условию*/}
            
            <ul className={style.stat__list}>

            {statistic.map((item, idx) => (
            <Template
            key={item.id}
            title={item.label}
            stats={item.percentage}
            option={colors[idx]}/>))
            }
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    statistic: PropTypes.array,
}

export default Statistics
