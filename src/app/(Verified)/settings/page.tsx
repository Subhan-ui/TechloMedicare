import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";

import Bar from "@/components/topBar/TopBar";
import Text from "@/components/topText/TopText";
import ChangePassword from "@/components/changePasswordForm/ChangePasswordForm";
import PersonalInformation from "@/components/personalInformation/PersonalInformation";

import { Help } from "@/constants/react-icons";
import { darkGrey } from "@/constants/colors";

const Setting = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <Text ml="23px">Settings</Text>
        <Bar classN="justify-between ml-[26px]">
          <h1 className="font-semibold text-xl">Settings</h1>
          <Help
            className="border p-1 h-[40px] w-[40px]"
            color={darkGrey}
            size={26}
          />
        </Bar>
        <ChangePassword email={session?.user?.email} />
        <PersonalInformation email={session?.user?.email} />
      </div>
    </>
  );
};

export default Setting;
