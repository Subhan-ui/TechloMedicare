import Bar from "@/components/bar/TopBar";
import { Help } from "@/constants/react-icons";
import Text from "@/components/text/TopText";
import ChangePassword from "@/components/changePasswordForm/ChangePasswordForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";
import PersonalInformation from "@/components/personalInformation/PersonalInformation";
import { darkGrey } from "@/constants/colors";

const Setting = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <Text ml="23px">Settings</Text>
        <Bar classN="justify-between">
          <h1 className="font-mukta font-semibold text-xl">Settings</h1>
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
