import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        className='doc_loginform'
        {...props}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
           <div className=''>
            <div className='form_logo'><img src={require('../image/images/logo (2).jpg')} ></img></div>
            <div> <input type='text' name='name' placeholder='Username' className='form_input' /> </div>
            <div><input type='password' name='Password' placeholder='Password' className='form_input'/></div>
            <div className='d-flex space-between checkbox_font'>
                <div><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked />Remeber Me</div>
                <div>Forgot password?</div>
            </div>

            <div ><a href='#' className='button_primary' > Sign In</a></div>
           </div>
        </Modal.Body>
      </Modal>
    );
  }
function Form() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}

export default Form