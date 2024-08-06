import React, { useState } from "react";
import { IconImage } from "../../assets/feedpostsicon";
import Crop from "./Crop";
import NavbarPost from "./NavbarPost";
import Cookies from 'js-cookie'; // Import js-cookie

const CreatePostLayer = ({ onNextStep }) => {
    const [msg, setMsg] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleUpload = async (files) => {
        if (!files || files.length === 0) {
            console.log("No file selected!");
            return;
        }

        const fd = new FormData();
        for (let i = 0; i < files.length; i++) {
            fd.append(`file${i + 1}`, files[i]);
        }

        setMsg("Uploading...");

        try {
            const response = await fetch('http://httpbin.org/post', {
                method: "POST",
                body: fd,
                headers: {
                    "Custom-Header": "value",
                }
            });

            if (!response.ok) {
                throw new Error("Bad response");
            }

            const data = await response.json();
            console.log(data);

            // Assuming data.files contains the URLs of uploaded images
            const fileUrls = Object.values(data.files);
            setUploadedImages(fileUrls);

            // Save the image URLs to cookies
            Cookies.set('uploadedImages', JSON.stringify(fileUrls), { expires: 1 }); // Expires in 1 day

            onNextStep(fileUrls); // Pass images to the next step
            setMsg("Upload successful");
        } catch (err) {
            setMsg("Upload failed");
            console.error(err);
        }
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        handleUpload(files);
    };

    return (
        <div>
            <div className="relative w-121 h-121">
                {uploadedImages.length > 0 ? (
                    <Crop images={uploadedImages} />
                ) : (
                    <div className="w-full h-full relative group overflow-hidden rounded-xl">
                        <div className="w-full h-full flex justify-center items-center flex-col gap-5">
                            <IconImage className="h-[77px] w-[96px]" />
                            <p>Drag photos and videos here</p>
                            <input type="file" onChange={handleFileChange} multiple className="hidden" id="fileInput" />
                            <label
                                htmlFor="fileInput"
                                className="cursor-pointer px-4 py-2 bg-bgButton text-sm rounded-lg"
                            >
                                Select from computer
                            </label>
                            {msg && <span>{msg}</span>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatePostLayer;
