// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button, Modal} from 'react-bootstrap';

// class Modal extends React.Component {
// constructor()
// {
// super()
// this.state={
//     show:false
// }
// }
// render(){
//     return (
<div>
<Modal show={this.state.show} onHide={()=> this.handleModal()} >
                                <Modal.Header closeButton>Modalhead</Modal.Header>
                                    <Modal.Body>
                                        hi 
                                    </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={()=>{this.handleModal()}} >
                                        close modal
                                    </Button>
                                </Modal.Footer>
                            </Modal>
</div>                            
    )}}

//     export default Modal;