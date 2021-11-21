import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import { useState } from 'react';

export default function Donut(props) {
    
    const [labelexist, setLabelExist] = useState(false);
    const [data, setData] = useState([]);
    const [labels, setlabels] = useState([]);
    var [bgcolor, setBgColor] =  useState([]);
    // var data = [];
    // var labels = [];

    function handleData(res){
        console.log(res);
        setData(Object.values(res.payload));
        setlabels(Object.keys(res.payload));
        var bg= [];
        for (var i=0; i < Object.values(res.payload).length; i++ ){
            bg.push('rgb('+Math.floor((1 + Math.random()) * 256/2)+', '+Math.floor((1 + Math.random()) * 256/2)+', '+Math.floor((1 + Math.random()) * 256/2)+')');
        }
        setBgColor(bg);
        setLabelExist(true);
    }

    return (
        <div>
            {labelexist ? 
            <Doughnut 
            data={{
               datasets: [{
                   label: 'Profile Predictor',
                   data: data,
                   backgroundColor: bgcolor,
                   hoverOffset: 4
                 }],
           
               // These labels appear in the legend and in the tooltips when hovering different arcs
               labels: labels
            }}
            height={400}
            width={400}
            options= {{
               maintainAspectRatio: false
           }}
           /> :
           handleData(props.res)
        }
        </div>
    )      
}



