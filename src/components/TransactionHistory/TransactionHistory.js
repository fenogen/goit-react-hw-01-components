import React from 'react'
import PropTypes from 'prop-types'

import style from './TransactionHistory.module.css'

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={style.table}>
            <thead className={style.thead}>
                <tr>
                    <th className={style.th}>Type</th>
                    <th className={style.th}>Amount</th>
                    <th className={style.th}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id} className={style.tr}>
                    <td className={style.td}>{transaction.type}</td>
                    <td className={style.td}>{transaction.amount}</td>
                    <td className={style.td}>{transaction.currency}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array,
}

export default TransactionHistory

