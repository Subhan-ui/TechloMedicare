const Text: React.FC<{ children: string[] | string; ml: string }> = ({
  children,
  ml,
}) => {
  return (
    <div className=" h-[57.86px] v_center " style={{ marginLeft: ml }}>
      <p className="font-mukta text-lg">{children}</p>
    </div>
  );
};

export default Text;
