
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import './PCard.css';


var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var now = new Date().toLocaleDateString("en-US", options);
function PCard(props) {
    return (
        <div id="pcard">
            <Card id="card" sx={{ maxWidth: 500 }}>
                <CardHeader
                    title={props.t}
                    subheader={now}
                />
                <CardContent id="cardcontent">
                    {props.p}{props.s} of {props.of}
                </CardContent>
        </Card>
        </div>

    );
}

export default PCard;
