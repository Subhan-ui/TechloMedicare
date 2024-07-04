
type componentsProps = {
  children: React.ReactNode;
  classN: string;
  onClick?: ()=>void;
}

const Bar: React.FC<componentsProps> = ({
  children,
  classN,
  onClick,
}) => {
  return (
    <>
      <div
        className={`bg-white h-[72.57px] w-[1122px] mx-[22.55px] v_center px-[28.44px] ${classN}`}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
};
export default Bar;
