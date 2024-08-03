import Backdrop from "../../modals/backdrop/ModalBackdrop";
import {
  sideNavbtns,
  belowSideNavBtns,
} from "@/constants/sideNavContent/SideNav";
import ModalSideBtn from "../modalSideBtn/ModalSideBtn";
import { Cross } from "@/constants/react-icons";

const ModalSide = ({ handleShow }: { handleShow: () => void }) => {
  return (
    <>
      <div>
        <Backdrop hiding={handleShow} />
        <div
          className={`absolute z-[250] top-12 left-1/2 transform -translate-x-1/2 p-8 rounded-lg  bg-white w-[90%] `}
        >
          <div onClick={handleShow} className="flex justify-end">
            <Cross size={18} />
          </div>

          <h1 className="font-mukta text-2xl font-semibold text-center mb-8">
            You can go to following pages.
          </h1>
          <p className="text-slate-500 ml-3 ">Menu</p>
          {sideNavbtns.map((btn) => (
            <ModalSideBtn
              key={btn.id}
              href={`/${btn.href}`}
              handleShow={handleShow}
            >
              {btn.Component}
              {btn.name}
            </ModalSideBtn>
          ))}

          <p className="text-slate-500 ml-3 ">General</p>
          {belowSideNavBtns.map((btn) => (
            <ModalSideBtn
              key={btn.id}
              href={`/${btn.href}`}
              handleShow={handleShow}
            >
              {btn.Component}
              {btn.name}
            </ModalSideBtn>
          ))}
        </div>
      </div>
    </>
  );
};

export default ModalSide;
