import React from 'react';
import {Table} from 'react-bootstrap';

 const FeatureListing=({features})=> {
    return (
        <div>
              <Table striped bordered hover className="table">
             
                  <thead>
                  <tr>
                    <th id="feature">Feature</th>
                    <th id="feature-desc">Feature Description</th>
                  </tr>
                </thead>
                {features && features.map(feature=>{
                return(
                    <tbody key={feature.id}>
                      <tr>
                    <td id="feature-name">{feature.feature}</td>
                    <td id="feature-text">{feature.text}</td>
                      </tr>
                    </tbody>
                )
            })}

              </Table>
                
            
        </div>
    )
}
export default FeatureListing;
