import React from 'react';
import {Table} from 'react-bootstrap';

 const FeatureListing=({features})=> {
    return (
        <div>
              <Table striped bordered >
             
                  <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Feature description</th>
                  </tr>
                </thead>
                {features && features.map(feature=>{
                return(
                    <tbody key={feature.id}>
                      <tr>
                    <td>{feature.feature}</td>
                    <td>{feature.text}</td>
                      </tr>
                    </tbody>
                )
            })}

              </Table>
                
            
        </div>
    )
}
export default FeatureListing;
