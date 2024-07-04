const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <table className="mx-[22.55px] bg-white mt-[17px] table-fixed w-[1122px]">
      <thead className="h-[65.7px] border-b-2 border-gray-300">
        <tr className="font-mukta text-lg text-[#828282] text-center">
          <td>Profile</td>
          <td>Name</td>
          <td>Diagnosis</td>
          <td>Status</td>
          <td>Phone Number</td>
          <td>Date of Birth</td>
          <td>Options</td>
        </tr>
      </thead>
      <tbody>
        <tr>{children}</tr>
      </tbody>
    </table>
  );
};

export default Table;
