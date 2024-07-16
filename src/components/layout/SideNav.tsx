import {
  Mail,
  Schedules,
  Dashboard,
  Support,
  Peoples,
  Analytics,
  Setting,
  Task,
} from "@/constants/react-icons";
import SideNavBtn from "./SideNavButton";

const SideNav = () => (
  <div className="max:w-[245.16px] med:w-[200px] md:w-[190px] md:block hidden  h-[908px] border-r-2 border-gray-300 bg-white relative">
    <h5 className="text-[#828282] text-[12px] mt-[30px] ml-[20px]">MENU</h5>
    <ul className="flex flex-col gap-4">
      <SideNavBtn href="" name="Dashboard">
        <Dashboard size={24} />
      </SideNavBtn>
      <SideNavBtn href="schedule" name="Schedule">
        <Schedules size={24} />
      </SideNavBtn>
      <SideNavBtn href="tasks" name="Tasks">
        <Task size={24} />
      </SideNavBtn>
      <SideNavBtn href="patients" name="Patients">
        <Peoples size={24} />
      </SideNavBtn>
      <SideNavBtn href="/messages" name="Messages">
        <Mail size={24} />
      </SideNavBtn>
      <SideNavBtn href="analytics" name="Analytics">
        <Analytics size={24} />
      </SideNavBtn>
    </ul>
    <div className="border-[1px] my-6 border-gray-300 mx-[58px]" />
    <h5 className="text-[#828282] text-[12px] mt-[30px] ml-[20px]">General</h5>
    <ul className="flex flex-col gap-4">
      <SideNavBtn href="settings" name="Settings">
        <Setting size={24} />
      </SideNavBtn>
      <SideNavBtn href="support" name="Support">
        <Support size={24} />
      </SideNavBtn>
    </ul>
  </div>
);

export default SideNav;
