import { FaPaintBrush } from "react-icons/fa";
import { TbMoodHappyFilled,  } from "react-icons/tb";
import { IoCodeSlashSharp } from "react-icons/io5";

function Slogan() {
    return (
        <>
            {/* <p>Art + Code = Joy</p> */}
            <p>
                Art <i><FaPaintBrush /></i>
                &nbsp;+&nbsp;
                Code <i><IoCodeSlashSharp /></i>
                &nbsp;=&nbsp;
                Joy <i><TbMoodHappyFilled /></i>
            </p>
        </>
    );
}
export default Slogan;

