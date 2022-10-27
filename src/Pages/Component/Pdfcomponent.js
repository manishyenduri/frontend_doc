import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf'
import lesson2 from '../../assets/sample.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import { TbChevronsLeft , TbChevronsRight } from "react-icons/tb";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class App extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
          <Document
            file={lesson2}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={300}/>
          </Document>
          
        </div>
        <nav style={{display:'flex',marginTop:'20px',marginLeft:'25%'}}>
            <a onClick={this.goToPrevPage}><TbChevronsLeft/> &nbsp; &nbsp;</a>
            <p >
                Page {pageNumber} of {numPages}
            </p>
          <a onClick={this.goToNextPage}>&nbsp; &nbsp;<TbChevronsRight/></a>
        </nav>
      </div>
    );
  }
}

export default App;