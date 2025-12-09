import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="cont-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1 className="cont-title">Contact Us</h1>
          <p className="description">
            Have questions or need assistance? Reach out to us!
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-header">
                <h3>Address</h3>
              </div>
              <p className="detail"> Gomti Nagar, Lucknow, UP 226010</p>
            </div>
              <div className="detail-item">
                <div className="detail-header">
                  <h3>Phone</h3>
                </div>
                <p className="detail">+91 12345 67891</p>
              </div>

              <div className="detail-item">
                <div className="detail-header">
                  <h3>Email</h3>
                </div>
                <p className="detail">read_it@gmail.com</p>
              </div>

            <div className="detail-item">
              <div className="detail-header">
                <h3>Hours</h3>
              </div>
              <p className="detail">
                Mon-Fri: 9:00 AM – 5:00 PM<br />
                Sat-Sun: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="contact-image">
         
          <img src="/images/contact.png"/>
        </div>
      </div>
    </div>
  )
}

export default Contact