import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <li key="01">
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });

      var testimonials1 = this.props.data.testimonials1.map(function (
        testimonials
      ) {
        return (
          <li key="02">
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });

      var testimonials2 = this.props.data.testimonials2.map(function (
        testimonials
      ) {
        return (
          <li key="02">
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="testimonials">
        <Slide {...properties}>
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>

              <div className="ten columns flex-container">
                <ul className="slides">{testimonials}</ul>
              </div>
            </div>
          </div>
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>

              <div className="ten columns flex-container">
                <ul className="slides">{testimonials1}</ul>
              </div>
            </div>
          </div>
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>

              <div className="ten columns flex-container">
                <ul className="slides">{testimonials2}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Testimonials;
