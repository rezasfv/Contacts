import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    if (this.props.onCreateContact) {
      this.props.onCreateContact(values);
      this.props.history('/');
    }
  };

  render() {
    return (
      <div>
        <Link className='close-create-contact' to='/'>
          Close
        </Link>

        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name' />
            <input type='text' name='handle' placeholder='Handle' />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

const CreateContactWithNavigate = (props) => {
  const navigate = useNavigate();
  return <CreateContact {...props} history={navigate} />;
};

export default CreateContactWithNavigate;
