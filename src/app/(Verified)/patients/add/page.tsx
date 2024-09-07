import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/AuthOptions";

import Text from "@/components/topText/TopText";
import AddPatient from "@/components/addPatient/AddPatient";

const Add = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <Text ml="23px">Patient Register {">"} Add Patient</Text>
        <AddPatient email={session?.user?.email} />
      </div>
    </>
  );
};

export default Add;
