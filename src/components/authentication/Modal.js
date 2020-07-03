import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  } from 'reactstrap';
import {Image} from 'react-bootstrap'
import {Link} from 'react-router-dom';
function ModalComponent(props) {

    const [isOpen, setisOpen] = useState(props.isOpen)
    
    const toggle = () => setisOpen(!isOpen);


    return (
        <div>
              <div>
      <Modal isOpen={isOpen} toggle={toggle} >
        <ModalHeader toggle={toggle}>Login/Register for more updates</ModalHeader>
        <ModalBody>
            Want to get updates on the newest news available? Then, click on the following links for register/login.
           <br/>
           <br/>
           If you have an account, then click on login otherwise click on register.

        </ModalBody>
        <ModalFooter>

          <Link to = "/register"><Button color="primary" onClick={toggle}>Register</Button></Link>
          <Link to = "/login"><Button color="danger" onClick={toggle}>Login</Button></Link>
        </ModalFooter>
      </Modal>
    </div>
  
        </div>
    )
}

export default ModalComponent
