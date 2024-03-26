import { useState } from "react";
import axios from "axios";

const UploadImage = (props) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `
                        77242ca1901f6cdac020`,
            pinata_secret_api_key: `ec20c470c74e44476e079b0f486c7b3ebbe116820ae56b1722dbb20d897ded31`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://scarlet-big-wildfowl-546.mypinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        (props.contract).add(props.account, ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  return (
    <>
      <div className="h-96 w-96 bg-gray-900 text-center rounded-lg pt-4 text-zinc-100 mt-4 font-bold">
        Upload Image to Decentralised Storage
        <form className=" flex flex-col m-6" onSubmit={handleSubmit}>
          <label htmlFor="file-upload" className="bg-blue-950 rounded-xl p-4 m-4">
            Choose Image
          </label>
          <input
            disabled={!props.account}
            className="hidden"
            type="file"
            id="file-upload"
            name="data"
            onChange={retrieveFile}
          />
          <span className="m-4 p-4 font-normal">Image: {fileName}</span>
          <button
            disabled={!file}
            className="m-10 rounded-full text-ml font-bold text-sl px-10 py-2 me-4 mb-4 bg-slate-800 hover:bg-sky-900 ring-4 ring-pink-500 "
            type="submit"
          >
            Upload Image
          </button>
        </form>
      </div>
    </>
  );
};
export default UploadImage;
