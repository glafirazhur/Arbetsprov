import React from 'react';
import './styles.css';

// Components
import Button from '../Button';

const Card = ({ id, headerText, descrText }) =>
    <div className="card" id={id} draggable onDragStart={(e)=>dragStart(e)}>
        <header className="card__header">
            <h3 className="card__header-text">{headerText}</h3>
            <span className="card__story-point">10</span>
        </header>
        <div className="card__body">
            <p className="card__description">{descrText}</p>
            <p className="card__assign-status">
                <span className="card__assign-label">Assigned to: </span>
                John Smith
            </p>
        </div>
        <footer className="card__footer">
            <Button buttonType="remove" />
            <Button buttonType="edit" />
        </footer>
    </div>;

export default Card;

const dragStart = (e) => {
    e.dataTransfer.setData("element", e.target.id);
};
