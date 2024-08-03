import Link from "next/link";
import Backdrop from "../../modals/backdrop/ModalBackdrop";

import {
  Mail,
  Schedules,
  Dashboard,
  Support,
  Peoples,
  Analytics,
  Setting,
  Task,
  Cross,
} from "@/constants/react-icons";
import { usePathname } from "next/navigation";


const ModalSide = ({ handleShow }: { handleShow: () => void }) => {
  const blue = "text-blue";
  const router = usePathname();
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

          <Link
            href="/"
            onClick={handleShow}
            className={`flex gap-4 mb-7 font-mukta text-lg ${
              router === "/" ? blue : ""
            }`}
          >
            <Dashboard size={24} />
            Dashboard
          </Link>

          <Link
            href="/schedule"
            onClick={handleShow}
            className={`flex gap-4 mb-7 font-mukta text-lg ${
              router === "/schedule" ? blue : ""
            }`}
          >
            <Schedules size={24} />
            Schedule
          </Link>

          <Link
            href="/tasks"
            onClick={handleShow}
            className={`flex gap-4 mb-7 font-mukta text-lg ${
              router === "/tasks" ? blue : ""
            }`}
          >
            <Task size={24} />
            Tasks
          </Link>

          <Link
            href="/patients"
            onClick={handleShow}
            className={`flex gap-4 mb-7 font-mukta text-lg ${
              router === "/patients" ? blue : ""
            }`}
          >
            <Peoples size={24} />
            Patients
          </Link>

          <Link
            href="/messages"
            onClick={handleShow}
            className={`flex gap-4 mb-7 font-mukta text-lg ${
              router === "/messages" ? blue : ""
            }`}
          >
            <Mail size={24} />
            Messages
          </Link>

          <Link
            href="/analytics"
            onClick={handleShow}
            className={`flex gap-4 mb-7 font-mukta text-lg ${
              router === "/analytics" ? blue : ""
            }`}
          >
            <Analytics size={24} />
            Analytics
          </Link>

          <p className="text-slate-500 ml-3 ">General</p>

          <Link
            href="/settings"
            onClick={handleShow}
            className={`flex gap-4 mb-7 font-mukta text-lg ${
              router === "/settings" ? blue : ""
            }`}
          >
            <Setting size={24} />
            Settings
          </Link>

          <Link
            href="/support"
            onClick={handleShow}
            className={`flex gap-4 mb-7 font-mukta text-lg ${
              router === "/support" ? blue : ""
            }`}
          >
            <Support size={24} />
            Support
          </Link>
        </div>
      </div>
    </>
  );
};

export default ModalSide;
