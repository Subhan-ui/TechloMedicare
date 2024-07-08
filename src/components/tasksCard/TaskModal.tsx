import Modal from "../modals/Modal";
import Input from "../ui/Input";

type typeTaskModal = {
    title: string,
    handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleShow: () => void,
    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void,
    loadAdd: boolean;
  }

const TaskModal = ({
  title,
  handleTitle,
  handleShow,
  handleSubmit,
  loadAdd
}: typeTaskModal) => {
  return (
    <Modal hiding={handleShow} className="fixed">
      <form onSubmit={handleSubmit}>
        <h3 className="font-mukta text-center font-bold text-2xl ">
          Enter Your Tasks
        </h3>
        <Input
          placeholder="Enter Title Here"
          name="title"
          value={title}
          onChange={handleTitle}
        />
        <div className="flex justify-end gap-4">
          <button className="border-2 border-white text-white rounded-lg bg-[#0000ac] py-2 px-4">
            {loadAdd ? "Adding..." : "Add"}
          </button>
          <button
            className="border-2 border-white text-white rounded-lg bg-[#0000ac] py-2 px-4"
            type="button"
            onClick={handleShow}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};


export default TaskModal;