import React from 'react'
const IntroDetails=({Intro})=> {
    return (
        <div>
            {Intro && Intro.map(intro=>{
                       return(
                        <div key={intro.id}>
                        <h1 id="name" dangerouslySetInnerHTML={ {__html:   intro.heading} }></h1>
                        <span  id="whatisit">What is it?</span>
                           <img src={intro.image} alt="introImage" align="right" style={{marginLeft:"5px",marginBottom:"5px"}}></img>
                           <p className="mt-2"id="intro-answer" dangerouslySetInnerHTML={ {__html:   intro.introduction} }>
                              
                           </p>
                           <p id="checkitout" dangerouslySetInnerHTML={ {__html:   intro.about} }>
                               
                           </p>
                           <hr/>
                           </div>
                       )
                   })}
        </div>
    )
}
export default IntroDetails;
