import React from 'react'

const IntroDetails=({Intro})=> {
    return (
        <div>
            {Intro && Intro.map(intro=>{
                       return(
                           <div>
                        <h1 id="name" dangerouslySetInnerHTML={ {__html:   intro.heading} }></h1>
                        <span  id="whatisit">What is it?</span>
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
