import React from 'react';
import "./SeasonsDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Buur, it's cilly.",
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) =>{
  if(month > 2 && month < 9){
    return lat > 0 ? "summer" : "winter";
  }else{
    return lat > 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const{text, iconName} = seasonConfig[season];

  console.log()
  
  return (
  <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`} />
    <h1>{text}</h1>
    <i className={`icon-right massive ${iconName} icon`} />
  </div>
  );
};

export default SeasonDisplay;