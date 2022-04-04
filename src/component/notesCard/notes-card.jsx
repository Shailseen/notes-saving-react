import "react-quill/dist/quill.snow.css";
import "./notes-card.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
let setIcon = true;
let readOnly = true;
export const NotesCard = () => {
  const [displayStatusToolbaar, setDisplayStatusToolbaar] = useState(false);
  const [displayEditIcon, setDisplayEditIcon] = useState(<EditIcon />);
  const [inputReadOnlyStatus,setInputReadOnlyStatus] = useState(true)
  const [containerBgColor,setContainerBgColor] = useState("color-white")
  const containerBackgroundColorHandler = (setColor) => {
      setContainerBgColor(setColor);
  }
  const clickHandler = () => {
    displayStatusToolbaar === false
      ? setDisplayStatusToolbaar(true)
      : setDisplayStatusToolbaar(false);
    setIcon
      ? setDisplayEditIcon(<SaveIcon />)
      : setDisplayEditIcon(<EditIcon />);
    if (setIcon === true) {
      setIcon = false;
    } else setIcon = true;
    readOnly === true ? (readOnly=false) : (readOnly=true);
    inputReadOnlyStatus === true ? setInputReadOnlyStatus(false) : setInputReadOnlyStatus(true)
  };
  const [statusColorPicker, setStatusColorPicker] = useState(
    "hide-color-picker"
  );
  const colorPickerHandler = () => {
    statusColorPicker === "show-color-picker"
      ? setStatusColorPicker("hide-color-picker")
      : setStatusColorPicker("show-color-picker");
  };
  const defaultmodule = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }],
      ["link", "image", { color: [] }],
      ["", "", "clean"],
    ],
  };
  const modules = {
    toolbar: false,
  };
  const [value, setValue] = useState("");
  return (
    <>
      <div className={`card-container ${containerBgColor}`}>
        
            <input disabled={inputReadOnlyStatus} className="title-bar" type="text" placeholder="Title" />
        <ReactQuill
          value={value}
          onChange={setValue}
          readOnly={readOnly}
          modules={displayStatusToolbaar ? defaultmodule : modules}
          placeholder="enter your notes here..."
          className="quill"
        />
        <div className="low-level-container">
          <div className="publish-date-container color-secondary font-sm">Created at: 23/03/2000</div>
          <div className="icons-container">
            <span className="color-secondary" onClick={clickHandler}>{displayEditIcon}</span>
            <ColorLensOutlinedIcon className="color-secondary" onClick={colorPickerHandler} />
            <LabelOutlinedIcon className="color-secondary" />
            <UnarchiveOutlinedIcon className="color-secondary"/>
            <DeleteOutlinedIcon className="color-secondary" />
          </div>
        </div>
      </div>
        <div
          className={`color-picker-container box-shadow2 ${statusColorPicker}`}
        >
          <div onClick={() => containerBackgroundColorHandler("color-yellow")} className="round-colors color-yellow"></div>
          <div onClick={() => containerBackgroundColorHandler("color-green")} className="round-colors color-green"></div>
          <div onClick={() => containerBackgroundColorHandler("color-orange")} className="round-colors color-orange"></div>
          <div onClick={() => containerBackgroundColorHandler("color-aqua")} className="round-colors color-aqua"></div>
          <div onClick={() => containerBackgroundColorHandler("color-skyblue")} className="round-colors color-skyblue"></div>
          <div onClick={() => containerBackgroundColorHandler("color-greenYellow")} className="round-colors color-greenYellow"></div>
          <div onClick={() => containerBackgroundColorHandler("color-violet")} className="round-colors color-violet"></div>
          <div onClick={() => containerBackgroundColorHandler("color-white")} className="round-colors color-white"></div>
          <div onClick={() => containerBackgroundColorHandler("color-pink")} className="round-colors color-pink"></div>
        </div>
    </>
  );
};
{
  /* <EditIcon onClick={clickHandler}/> */
}
