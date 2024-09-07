import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/AuthOptions";

import Text from "@/components/topText/TopText";
import Rows from "@/components/rows/Rows";

const Patients = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <Text ml="22.55px">Patient Register</Text>
        <Rows email={session?.user?.email} />
      </div>
    </>
  );
};

export default Patients;
