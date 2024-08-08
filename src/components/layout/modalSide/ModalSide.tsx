import Backdrop from "../../modals/backdrop/ModalBackdrop";
import {
  sideNavbtns,
  belowSideNavBtns,
} from "@/constants/sideNavContent/SideNav";
import { Cross } from "@/constants/react-icons";
import SideNavBtn from "../sideNavButton/SideNavButton";

const ModalSide = ({
  handleShow,
  show,
}: {
  handleShow: () => void;
  show: boolean;
}) => {
  return (
    <>
      <div className="fixed inset-0 z-[7000]">
        <Backdrop hiding={handleShow} />
        <div
          className={` absolute z-[6000] -top-1.5 left-0 h-[104vh] p-8 pl-0 rounded-lg  bg-white w-[280px] transition-all duration-[1000ms] ease-in-out ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div onClick={handleShow} className="flex justify-start pl-4 mb-4">
            <Cross size={18} />
          </div>
          <p className="text-slate-500 ml-5 ">Menu</p>
          <ul className="flex flex-col gap-4">
            {sideNavbtns.map((btn) => (
              <SideNavBtn
                key={btn.id}
                disable={btn.disable}
                href={btn.href}
                name={btn.name}
              >
                {btn.Component}
              </SideNavBtn>
            ))}
          </ul>

          <p className="text-slate-500 ml-5 ">General</p>
          <ul className="flex flex-col gap-4">
            {belowSideNavBtns.map((btn) => (
              <SideNavBtn
                key={btn.id}
                disable={btn.disable}
                href={btn.href}
                name={btn.name}
              >
                {btn.Component}
              </SideNavBtn>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ModalSide;
