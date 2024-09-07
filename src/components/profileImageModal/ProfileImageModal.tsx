import Backdrop from "../modals/backdrop/Backdrop";
import { typeModalForm } from "@/types/types";

const Modal: React.FC<typeModalForm> = ({
  image,
  progress,
  handleShow,
  handleChange,
  handleChangeUrl,
}) => (
  <>
    <Backdrop hiding={handleShow} />
    <div className="block fixed z-[6000] top-24 left-1/2 transform -translate-x-1/2 p-12  rounded-lg md:w-[45%] w-[80%] bg-white">
      <h1 className="font-semibold text-2xl mb-8">
        Choose Your Profile Image
      </h1>
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
        <div className="flex gap-3 flex-wrap">
          <button
            type="button"
            className="bg-white text-black py-2 border-2 hover:bg-black hover:text-white rounded-lg px-5 hover:opacity-80 disabled:bg-slate-400"
            onClick={handleChangeUrl}
            disabled={progress === 100}
          >
            {progress === 0
              ? "Upload"
              : progress < 100
              ? "Uploading..."
              : "done"}
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
      <div></div>
    </div>
  </>
);

export default Modal;
