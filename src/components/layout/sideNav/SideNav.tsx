import SideNavBtn from "../sideNavButton/SideNavButton";
import {
  belowSideNavBtns,
  sideNavbtns,
} from "@/constants/sideNavContent/SideNav";

const SideNav = () => (
  <div className="maxi:w-[20vw] max:w-[245.16px] med:w-[200px] md:w-[190px] md:block hidden md:sticky top-[92.18px]  h-[calc(100vh-92.18px)] border-r-2 border-gray-300 bg-white relative">
    <h5 className="text-lightSlate text-[12px] mt-[30px] ml-[20px] mb-[5px]">
      MENU
    </h5>
    <ul className="flex flex-col gap-2">
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
    <div className="border-[1px] my-6 border-gray-300 mx-[38px]" />
    <h5 className="text-lightSlate text-[12px] mt-[35px] ml-[20px] mb-[5px]">
      General
    </h5>
    <ul className="flex flex-col gap-2">
      {belowSideNavBtns.map((btn) => (
        <SideNavBtn
          href={btn.href}
          disable={btn.disable}
          name={btn.name}
          key={btn.id}
        >
          {btn.Component}
        </SideNavBtn>
      ))}
    </ul>
  </div>
);

export default SideNav;
