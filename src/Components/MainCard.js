import React from 'react';
import PCard from './PCard';
import './MainCard.css';

function MainCard(props) {
    return (
        <div>
            <PCard p={props.p} s="%" of="100%" t={"Year"} />
            <PCard p={props.m} of="12" t={"Month"} />
            <PCard p={props.w} of={props.tw} t={"Week"} />
            <PCard p={props.d} of={props.td} t={"Days"}/>
        </div>
    )
}

export default MainCard;
