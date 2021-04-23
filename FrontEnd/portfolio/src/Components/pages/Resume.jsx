import React, { useEffect, useState } from "react";
//import formData from "form-data";
import axios from "axios";

const Resume = () => {
  const [file, setFile] = useState("");
  const [filename, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const [pdf, setPdf] = useState("");

  const handlePdfFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/file-upload/", {
        method: "GET",
      });
      const data = await response.json();
      //console.log("this is data", data);
      setPdf(data[0].resume_file);
    };
    getData();
  }, []);

  const handlePdfFileSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    await axios
      .post("http://localhost:4000/file-upload/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((response) => {
        if (response) {
          if (response.status === 200) {
            setMessage("Your fill has been uploaded");
          } else {
            setMessage("Please upload you file again");
          }
        }
      });
  };
  return (
    <>
      <div className="containter">
        <form className="form-group" onSubmit={handlePdfFileSubmit}>
          <input
            type="file"
            className="form-control"
            required
            onChange={handlePdfFileChange}
          />
          {filename}

          <br></br>
          <button
            type="submit"
            value="Upload"
            className="btn btn-success btn-lg"
          >
            UPLOAD
          </button>
        </form>
        <p>{message}</p>
        <p>File Name:{pdf}</p>
      </div>
    </>
  );
};

export default Resume;
