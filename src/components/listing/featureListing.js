import React from 'react';
import {Table} from 'react-bootstrap'
 const FeatureListing=({features})=> {
    return (
        <div>
            {features && features.map(feature=>{
                return(
            
                <Table striped bordered key={feature.id}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Feature description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                <td>{feature.feature}</td>
                <td>{feature.text}</td>
                  </tr>
                </tbody>
              </Table>
                )
            })}
            
        </div>
    )
}
export default FeatureListing;
