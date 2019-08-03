import React from "react";

const SeasonConfig = {
    summer : {
        text :"Lets hit the beach",
        iconName : "sun"
    },
    winter: {
        text : "Burr,It's very chilly",
        iconName: "snowflake"
    }

};
const GetSeason =(lat, month) => {
    if(month>2 && month <9){
        return lat > 0 ? "summer": "winter";
    } else {
        return lat > 0 ? "winter": "summer";
    }
};

const SeasonDisplay = (props) => {
    const season= GetSeason(props.lat, new Date().getMonth()); 
    const {text,iconName} = SeasonConfig[season];
    return <div>
        <i className={`${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`${iconName} icon`}/>
    </div>
}

export default SeasonDisplay;