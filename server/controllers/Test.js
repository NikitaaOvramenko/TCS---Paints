const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data"); 

class Test {

  async TestFunc(req, res) {
    try {

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      const { MessageT, Id, Author } = req.body;
      const image = req.files?.Image

      

      const formData = new FormData();
      formData.append("MessageT", MessageT);
      formData.append("Id", Id);
      formData.append("Author", Author);
      if(image != null ){
            formData.append("Image",image.data,image.name);
      }
    
      

      // Forward to ASP.NET backend
      const response = await axios.post(
        "https://localhost:44323/api/Session/WriteToChat",
        formData,
        { headers: formData.getHeaders() }
      );

      console.log("Response from backend:", response.data);

      res.json({
       data: response.data
      });
    } catch (err) {
      console.error("Error forwarding to backend:", err.message);
      res.status(500).json({ status: "error", error: err.message });
    }
  }
}

module.exports = new Test();