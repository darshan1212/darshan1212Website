import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
            <br />
            <h4>
              <p className="lead">Address and Phone</p>
            </h4>

            <p className="lead">
              {name}
              <br />
              {city} <br />
              {state}, {zip}
              <br />
              <span>{phone}</span>
              <br />
              <span>
                <a href="pateldarshan421@gmail.com">{email}</a>
              </span>
            </p>
          </div>

          <div className="ten coloumns"></div>
        </div>

        <div className="row">
          <div className="eight columns">
            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
