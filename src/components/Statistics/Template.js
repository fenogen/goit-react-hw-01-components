import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Template = ({ title, stats, option }) => {
  return (
    <li className={style.item} style={{ backgroundColor: option }}>
      <span className="label">{title}</span>
      <span className="percentage">{stats}%</span>
    </li>
  );
};

Template.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
  option: PropTypes.string,
};

export default Template;
