import { usePathname } from "next/navigation";
import Link from "next/link";

const ModalSideBtn = ({
  handleShow,
  children,
  href,
}: {
  handleShow: () => void;
  children: React.ReactNode;
  href: string;
}) => {
  const blue = "text-blue";
  const router = usePathname();
  return (
    <Link
      href={href}
      onClick={handleShow}
      className={`flex gap-4 mb-7 font-mukta text-lg ${
        router === href ? blue : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ModalSideBtn;
