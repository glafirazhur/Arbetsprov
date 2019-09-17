import React from 'react';
import './styles.css';

// components
import Card from "../Card";
import AddButton from "../AddButton/AddButton";

import cards from '../../data';

const App = () =>
    <main>
        <h1>Task tracker</h1>
        <div className="grid">
            <div className="col">
                <h2 className="col__header">New</h2>
                <div className="col__cards-area drop-area" onDrop={(e) => dropElem(e)} onDragOver={(e) => allowDrop(e)}>
                    {cards.map((card) => {
                        if(card.status === 0)
                            return <Card key={card.id} id={card.id} headerText={card.title} descrText={card.description} />
                    })}
                </div>
            </div>
            <div className="col">
                <h2 className="col__header">Active</h2>
                <div className="col__cards-area drop-area" onDrop={(e) => dropElem(e)} onDragOver={(e) => allowDrop(e)}>
                    {cards.map((card) => {
                        if(card.status === 1)
                            return <Card key={card.id} id={card.id} headerText={card.title} descrText={card.description} />
                    })}
                </div>
            </div>
            <div className="col">
                <h2 className="col__header">On Hold</h2>
                <div className="col__cards-area drop-area" onDrop={(e) => dropElem(e)} onDragOver={(e) => allowDrop(e)}>
                    {cards.map((card) => {
                        if(card.status === 2)
                            return <Card key={card.id} id={card.id} headerText={card.title} descrText={card.description} />
                    })}
                </div>
            </div>
            <div className="col">
                <h2 className="col__header">Completed</h2>
                <div className="col__cards-area drop-area" onDrop={(e) => dropElem(e)} onDragOver={(e) => allowDrop(e)}>
                    {cards.map((card) => {
                        if(card.status === 3)
                            return <Card key={card.id} id={card.id} headerText={card.title} descrText={card.description} />
                    })}
                </div>
            </div>
        </div>
        <AddButton />
    </main>;

export default App;

const dropElem  = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("element");
    const dragDropElement = document.getElementById(data);
    e.target.closest('.drop-area').appendChild(dragDropElement);
};

const allowDrop = (e) => {
    e.preventDefault();
};
