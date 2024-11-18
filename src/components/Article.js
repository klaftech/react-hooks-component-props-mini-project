import React from 'react';

const isMoreThanThirtyMin = (minutes) => { 
    return minutes >= 30 ? true : false 
}

const calcHandler = (minutes) => {
    const div = isMoreThanThirtyMin ? 10 : 5
    const divB = isMoreThanThirtyMin? 100 : 50
    return Math.round(div*minutes/divB);
}

const getUnits = (minutes) => { 
    return isMoreThanThirtyMin ? calcHandler(minutes) : calcHandler(minutes) 
}

const returnCups = (minutes) => {
    const fivesCup = "☕️";
    const tensCup = "🍱";
    let cups = '';
    
    for(let i = 0; i < getUnits(minutes); i++ ){
        cups += isMoreThanThirtyMin(minutes) ? tensCup : fivesCup;
    }

    return cups
}

const Article = ({ title, date, preview, minutes}) => {    
    //console.log(minutes)
    //console.log(getUnits(minutes))
    //console.log(returnCups(minutes))
    //console.log(isMoreThanThirtyMin(minutes))
    //console.log('===================')
   
    return (
        <article>
            <h3>{title}</h3>
            <small>{date ? date : "January 1, 1970"} • {returnCups(minutes)} {minutes} min read </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;