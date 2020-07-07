import React from 'react'
import {Table,Button} from 'react-bootstrap';
const TableDetails=({header,details})=> {
    return (
        <Table striped bordered hover responsive className="a" >
                {header && header.map(head=>{
                           return(
                         <thead >
                                <tr>
                                   <th>Company</th>
                                   {head.featuresub.map(feat=>{
                                        return(
                                            <th  >{feat.feature}</th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            
                             )
                       })}
                        {details && details.map(detail=>{
                            return(
                                 <tbody>
                                    <tr>
                                        <td id="td"><a href={detail.url}>{detail.name}</a>
                                        <br/>
                                        {detail.buyurl!== null ?
                                         <Button variant="secondary"><a href={detail.buyurl}>Buy now</a></Button>
                                         :''
                                          }
                                        </td>
            
                                        {detail.featuresub.map(det=>{
                                            return(
                                                <td > {det.text}</td>
                                            )
                                        })}
                                    
                                    </tr>

                                </tbody>
                              )
                        })}
                </Table>
    )
}
export default TableDetails;