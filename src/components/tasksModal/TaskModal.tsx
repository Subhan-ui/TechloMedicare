import Modal from "../modals/modal/Modal";
import Input from "../ui/input/Input";
import { typeTaskModal } from "@/types/types";

const TaskModal = ({
  title,
  handleTitle,
  handleShow,
  handleSubmit,
  loadAdd,
}: typeTaskModal) => (
  <Modal hiding={handleShow} className="fixed">
    <form onSubmit={handleSubmit} className="maxi:w-[50vw] max:w-[500px] med:w-[450px] md:w-[350px] sm:w-[300px]">
      <h3 className="text-center  font-bold text-2xl ">
        Enter Your Tasks
      </h3>
      <Input
        placeholder="Enter Title Here"
        name="title"
        value={title}
        onChange={handleTitle}
      />
      <div className="flex justify-end gap-4">
        <button disabled={loadAdd} className="disabled:bg-disabled border-2 border-white text-white rounded-lg bg-blue py-2 px-4">
          {loadAdd ? "Adding..." : "Add"}
        </button>
        <button
          className="border-2 border-white text-white rounded-lg bg-blue py-2 px-4"
          type="button"
          onClick={handleShow}
        >
          Cancel
        </button>
      </div>
    </form>
  </Modal>
);

export default TaskModal;
