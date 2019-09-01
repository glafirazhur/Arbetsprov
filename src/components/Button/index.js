import React from 'react';
import './styles.css';

const Button = ({ buttonType }) =>
    <button className={`button button--${buttonType}`} type="button" aria-label={`${buttonType} card`}>
        <span className="visually-hidden">{`${buttonType} card`}</span>
    </button>;

export default Button;
