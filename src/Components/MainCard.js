import React from 'react';
import PCard from './PCard';
import Edate from './Edate';
import './MainCard.css';

function MainCard(props) {
    return (
        <div>
            <PCard p={props.p} s="%" of="100%" t={"Year"} />
            <PCard p={props.m} of="12" t={"Month"} />
            <PCard p={props.w} of={props.tw} t={"Week"} />
            <PCard p={props.d} of={props.td} t={"Days"} />
            <div className='button'>
                <Edate />
            </div>

        </div>
    )
}

export default MainCard;
