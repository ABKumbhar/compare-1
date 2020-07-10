import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import {Image} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function ModalComponent(props) {

    const [isOpen, setisOpen] = useState(props.isOpen)
    
    const toggle = () => setisOpen(!isOpen);

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     console.log('This will run after 1 second!')
    //     return(<)
    //   }, 1000);
    //   return () => clearTimeout(timer);
    // }, []);
    
    return (
        <div>
              <div>
      <Modal isOpen={isOpen} toggle={toggle} >
        <ModalHeader toggle={toggle}>Register for more updates</ModalHeader>
        <ModalBody>
            Want to get updates on the newest news available? Then, click on the following link for register.
           <br/>
           <br/>
           Create your account and enjoy the updates.

        </ModalBody>
        <ModalFooter>

          <Link to = "/register"><Button color="danger" onClick={toggle}>Register</Button></Link>
        </ModalFooter>
      </Modal>
    </div>
  
        </div>
    )
}

export default ModalComponent;
