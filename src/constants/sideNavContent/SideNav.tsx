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

export const sideNavbtns = [
  {
    id: 1,
    href: "",
    name: "Dashboard",
    disable: false,
    Component: <Dashboard size={24} />,
  },
  {
    id: 2,
    href: "schedule",
    name: "Schedule",
    disable: false,
    Component: <Schedules size={24} />,
  },
  {
    id: 3,
    href: "tasks",
    name: "Tasks",
    disable: false,
    Component: <Task size={24} />,
  },
  {
    id: 4,
    href: "patients",
    name: "Patients",
    disable: false,
    Component: <Peoples size={24} />,
  },
  {
    id: 5,
    href: "messages",
    name: "Messages",
    disable: false,
    Component: <Mail size={24} />,
  },
  {
    id: 6,
    href: "analytics",
    name: "Analytics",
    disable: true,
    Component: <Analytics size={24} />,
  },
];

export const belowSideNavBtns = [
  {
    id: 7,
    href: "settings",
    name: "Settings",
    disable: false,
    Component: <Setting size={24} />,
  },
  {
    id: 8,
    href: "support",
    name: "Support",
    disable: true,
    Component: <Support size={24} />,
  },
];
