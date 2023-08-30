import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
    const {
        register,
        handleSubmit,
        reset,

    } = useForm()

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel();
    }
    const onCancel = () => {
        reset();
        setIsOpen(false)
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">Title</label>
                    <input className="w-full rounded-md" type="text" id="title" {...register("title")} />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">Description</label>
                    <textarea
                        id="description"
                        className="w-full rounded-md"
                        type="text"
                        {...register("description")}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">Deadline</label>
                    <input
                        type="date"
                        id="date"
                        className="w-full rounded-md"
                        {...register("date")}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">Assign to</label>
                    <select id="assignTo"
                        className="w-full rounded-md"
                        {...register("assignTo")}
                    >
                        <option value="Iron Man">Iron Man</option>
                        <option value="Captain America">Captain America</option>
                        <option value="Black Widow">Black Widow</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">Priority</label>
                    <select
                        id="priority"
                        className="w-full rounded-md"
                        {...register("priority")}
                    >
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button onClick={() => onCancel()} type="button" className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTasksModal;