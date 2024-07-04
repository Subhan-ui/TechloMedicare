const Col: React.FC<{ day: string }> = ({ day }) => {
  return (
    <>
      <p className="text-center border-r-2 h-[100px] border-b-2">{day}</p>
      <div className="text-center border-r-2 h-[190px] border-b-2"></div>
      <div className="text-center border-r-2 h-[190px] border-b-2"></div>
      <div className="text-center border-r-2 h-[190px] border-b-2"></div>
      <div className="text-center border-r-2 h-[190px] border-b-2"></div>
      
    </>
  );
};

export default Col;
