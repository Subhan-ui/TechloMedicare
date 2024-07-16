import Bar from "@/components/commonContent/TopBar";
import { Help } from "@/constants/react-icons";
import Text from "@/components/commonContent/TopText";
import ChangePassword from "@/components/settings/ChangePasswordForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";
import PersonalInformation from "@/components/settings/PersonalInformation";

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
            color="#333333"
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
