import React from 'react'
import style from './Statistics.module.css'

import Template from './Template'
import statistic from '../../database/statistical-data.json'
console.log(statistic.label)


const colors = ['purple','rebeccapurple','tomato', 'violet', 'royalblue']

const Statistics = ({title}) => {

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

export default Statistics
