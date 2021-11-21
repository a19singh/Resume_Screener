// import {
//     Link
// } from "react-router-dom";

import React, { Component } from 'react';
import axios from "axios";
import Donut from './Donut';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


export default class FileUpload extends Component {

    custom_file_upload_url = 'http://127.0.0.1:8000/get_prediction'


    constructor(props) {
        super(props);
        this.state = {
            pdf_file: null,
            data: [],
            data_state: false
        }
    }

    getFile = (e) => {
        let pdf_files = e.target.files[0];
        this.setState({
            pdf_file: pdf_files,
        })
    }


    render(props) {
        return (
            <div>
                <div className="container d-grid gap-3 my-4">
                    {/* <h3>Resume Screener</h3> */}
                    {this.state.data_state ?
                        <>
                            <div className="row g-3  rounded p-2 my-1">
                                <Donut res={this.state.data} />
                                <div className="mb-2 text-center">
                                    <input type="submit" className="btn btn-primary" onClick={this.handleBack} value="Back" />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="">
                                <h2>{this.props.formTitle}</h2>
                            </div>
                            <div className="row g-3 border border-warning rounded p-2 my-1">
                                <div className="mb-2">
                                    <label htmlFor="formFile" className="form-label">Click on the "Choose File" button to upload a file:</label>
                                    <input className="form-control" type="file" id="files" name="files" onChange={this.getFile} />
                                </div>
                                <div className="col mb-2 ">
                                    {/* <Link to="/donut"> */}
                                    <input type="submit" className="btn btn-primary" onClick={this.handleSubmit} value="Upload" />
                                </div>
                            </div>
                        </>
                    }
                    {/* else{
                        <>
                        <Link to="/donut" params={{ res: this.state.data }} >
                            
                    </Link>
                    </>
                    } */}


                    {/* </form> */}

                </div>

            </div>
        )
    }

    handleSubmit = () => {

        if (this.state.pdf_file !== null) {

            let formData = new FormData();
            formData.append('files', this.state.pdf_file);
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile
            // console.log("Form Data: "+formData);
            axios.post(
                this.custom_file_upload_url,
                formData,
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                        // 'X-CSRFToken': getCookie('csrftoken'),
                    },
                }
            )
                .then(res => {
                    console.log(`Success, ` + JSON.stringify(res.data));
                    this.setState({
                        data: res.data,
                        data_state: true
                    });
                    // {/* <Link to="/donut"> */}
                    // console.log(`First value` + format_data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    handleBack = () => {
        this.setState({
            data: [],
            data_state: false
        });
    }


}
