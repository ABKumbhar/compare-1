import React from 'react'
import {Container} from 'react-bootstrap'
 const FeatureListing=({features})=> {
    return (
        <Container>
            {features && features.map(feature=>{
                return(
                <ul key={feature.id}>
                        <li>
                            <h5>{feature.feature}</h5>
                            <p>
                                {feature.text}
                            </p>
                        </li>
                 </ul>
                )
            })}
            
        </Container>
    )
}
export default FeatureListing;
