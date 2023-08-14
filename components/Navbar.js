import Link from "next/link";
import { HiOutlineDocumentAdd } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="nav-container">
      <h1 className="app-head">Daily Tasks</h1>
      <Link href={"/AddTask"}>
        <button className="add-task-btn">
          Add Task <HiOutlineDocumentAdd className="note-icon" />
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
