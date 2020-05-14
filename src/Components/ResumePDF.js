import React, { Component } from "react";
import { Document, Page } from "react-pdf";

export default class ResumePDF extends Component {
  state = { numPages: null, pageNumber: 1 };

  componentDidMount() {
    var canvas = document.getElementsByTagName("canvas");
    this.setState({ canvas });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    var canvas = document.getElementsByTagName("canvas");
    var checkExist = setInterval(function() {
      if (canvas.length) {
        console.log("Exists!");
        // code for the canvas property goes here
        //canvas[0].parentElement.classList.add("center");
        // canvas[0].style = "";
        // console.log(canvas[0].style);

        clearInterval(checkExist);
      }
    }, 100);
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div id="reactpdf">
        <Document file="resume.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div>
    );
  }
}
