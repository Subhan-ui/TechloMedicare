import { useState } from "react";
import Backdrop from "../modals/ModalBackdrop";
import { useEdgeStore } from "@/lib/edgestore";
import { stringify } from "querystring";
import Link from "next/link";

const Modal: React.FC<{
  handleShow: () => void;
  handleChange:(e: React.ChangeEvent<HTMLInputElement>) =>void
  handleChangeUrl:()=>void;
  image: File|undefined;
  urls: string|undefined;
  progress:number;
}> = ({ handleShow,handleChange, handleChangeUrl, image,urls,progress }) => {

  return (
    <>
      <Backdrop hiding={handleShow} />
      <div className="md:block hidden fixed z-[250] top-24 left-1/2 transform -translate-x-1/2 p-12  rounded-lg w-[45%] bg-white">
        <h1 className="font-semibold text-2xl font-mukta mb-8">
          Choose Your Profile Image
        </h1>
        {/* <div className="h-[6px] w-44 border rounded overflow-hidden mx-auto">
        <div className="h-full bg-white transition-all duration-150" style={{width:`${progress}%`, }}/>
      </div> */}
        <div className="v_center justify-between">
          <label
            htmlFor="doc"
            className="flex items-center p-4 gap-3 rounded-3xl border border-gray-300 border-dashed bg-gray-50 cursor-pointer"
          >
            <img
              className="h-16 w-auto"
              src="https://demo.tailus.io/images/icons/upload.webp"
              alt=""
            />

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-gray-700">
                {image !== undefined ? "Uploaded" : "Upload a file"}
              </h4>
            </div>
            <input
              type="file"
              id="doc"
              name="doc"
              
              onChange={handleChange}
              accept="png, jpg"
              hidden
            />
          </label>
          <div className="flex gap-3">
            <button
            type="button"
              className="bg-white text-black py-2 border-2 hover:bg-black hover:text-white rounded-lg px-5 hover:opacity-80 disabled:bg-slate-400"
              onClick={handleChangeUrl}
              disabled={progress===100}
            >
              {progress===0?'Upload':progress<100?'Uploading...':'done'}
              {/* {progress===0?'':'updloading'} */}
            </button>
            <button
            type="button"
              className="bg-white text-black py-2 border-2 hover:bg-black hover:text-white rounded-lg px-5 hover:opacity-80"
              onClick={handleShow}
            >
              Cancel
            </button>
          </div>
        </div>
        <div>
        {/* {urls?.url && (
          <Link href={urls.url} target="_blank">
            URL
          </Link>
        )}
        {urls?.thumbnailUrl && (
          <Link href={urls.thumbnailUrl} target="_blank">
            Thumbnail
          </Link>
        )} */}
        </div>
      </div>
    </>
  );
};

export default Modal;
