import Text from "@/components/text/TopText";
import AddPatient from "@/components/addPatient/AddPatient";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

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
