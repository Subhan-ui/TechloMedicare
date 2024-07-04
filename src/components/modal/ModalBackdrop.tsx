const Backdrop: React.FC<{ hiding: () => void }> = (props) => {
    return (
      <div
        className="fixed top-0 left-0 w-full h-[100vh] z-[200] bg-[#000000bf]"
        onClick={props.hiding}
      />
    );
  };

  export default Backdrop