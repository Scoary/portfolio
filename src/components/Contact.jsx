import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_92ge243', 'template_a7ojbxm', values, '4v4xqsJ-E0gyP3RyL')
    .then(response => {
      console.log('SUCCESS!',response);
      setValues({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setStatus('SUCCESS');
    }, error => {
      console.log('FAILED!', error)
    });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 6000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (

    <>
      {status && renderAlert()}
      <form className="contactform" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                required={true}
                value={values.name}
                onChange={handleChange}
                placeholder="Votre nom"
              />
              
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                value={values.email}
                required={true}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Votre email"
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                value={values.subject}
                required={true}
                onChange={handleChange}
                type="text"
                name="subject"
                placeholder="Votre sujet"
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                value={values.message}
                onChange={handleChange}
                required={true}
                name="message"
                placeholder="Votre message"
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Envoyer mon message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

const renderAlert = () => (
  <div className="alert alert-success text-center">
    <p>Merci, votre message a bien été envoyé</p>
  </div>
)

export default Contact;
