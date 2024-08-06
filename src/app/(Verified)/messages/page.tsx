import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import Message from "@/components/messages/Message";

const Messages = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
    <div className="flex flex-col items-end">
      <Message email={session?.user?.email} />
    </div>
    </>
  );
};

export default Messages;
