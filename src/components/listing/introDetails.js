import React from 'react';
import {Row,Col,Image} from 'react-bootstrap'
const IntroDetails=({Intro})=> {
    return (
        <div>
            {Intro && Intro.map(intro=>{
                       return(
                        <div key={intro.id}>
                        <h1 id="intro-name" dangerouslySetInnerHTML={ {__html:   intro.heading} }></h1>

                        <Row>
                            <Col lg={9}>
                              <span  id="whatisit">What is it?</span>
                              <p className="mt-2"id="intro-answer" dangerouslySetInnerHTML={ {__html:   intro.introduction} }>
                              
                              </p>
                             
                              
                            </Col>
                            <Col xs={{ order: 'first' }} md={{ order: 'last' }}>
                           <Image src={`https://aniket1999.pythonanywhere.com/${intro.image}`} alt="introImage" style={{width:'20%'}}/>
                             </Col>
                        </Row>
                       
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
