import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './card.css';

const Card = ({ info, index }) => {
    const [clicked, setClicked] = useState(false);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
        if (direction === 'right') {
            console.log('You liked: ' + info.name.fi);
            window.open(info.url.fi, '_blank');
        }
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    };

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['up', 'down']}
        >
            <div
                className="card"
                style={{ zIndex: index }}
                onClick={handleClick}
            >
                <h2>{info.name.fi}</h2>
                {clicked && (
                    <div className="card-info">
                        <p>{info.description}</p>
                        <p>{info.endDate}</p>
                    </div>
                )}
            </div>
        </TinderCard>
    );
};

export default Card;