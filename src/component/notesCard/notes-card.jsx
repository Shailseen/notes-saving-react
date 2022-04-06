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
import { useEffect } from "react";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { useNotes } from "../../context/notes-context";
let setIcon = true;
let readOnly = true;
export const NotesCard = ({ item,isArchive }) => {
  var year = (new Date()).getFullYear();
    var month = (new Date()).getMonth() + 1;
    var day = (new Date()).getDate();
    const {saveNotesHandler,notesList,deleteNotesHandler,addNotesToArchiveHandler,removeNotesToArchiveHandler,deleteNoteFromArchivesHandler} = useNotes();
  const {
    titleCard,
    valueCard,
    colorCard,
    todayYear,
    todayMonth,
    todayDay,
  } = item;
  const [displayStatusToolbaar, setDisplayStatusToolbaar] = useState(false);
  const [displayEditIcon, setDisplayEditIcon] = useState(<EditIcon />);
  const [inputReadOnlyStatus, setInputReadOnlyStatus] = useState(true);
  const [containerBgColor, setContainerBgColor] = useState("color-white");
  const [title, setTitle] = useState(titleCard);

  const titleHandler = (eventValue) => {
    setTitle(eventValue);
  };

  useEffect(() => {
    setContainerBgColor(colorCard);
    setValue(valueCard);
  }, []);

  const containerBackgroundColorHandler = (setColor) => {
    setContainerBgColor(setColor);
  };

  const clickHandler = () => {
    colorPickerHandler()
    displayStatusToolbaar === false
      ? setDisplayStatusToolbaar(true)
      : setDisplayStatusToolbaar(false);
    setIcon
      ? setDisplayEditIcon(<SaveIcon onClick={()=>saveNotesHandler(title, value, containerBgColor,year,month,day,notesList._id)} />)
      : setDisplayEditIcon(<EditIcon />);
    if (setIcon === true) {
      setIcon = false;
    } else setIcon = true;
    readOnly === true ? (readOnly = false) : (readOnly = true);
    inputReadOnlyStatus === true
      ? setInputReadOnlyStatus(false)
      : setInputReadOnlyStatus(true);
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
      <div
        key={item._id}
        className={`notes-card-container ${containerBgColor}`}
      >
        <input
          disabled={inputReadOnlyStatus}
          className="title-bar"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => titleHandler(e.target.value)}
        />
        <ReactQuill
          value={value}
          onChange={setValue}
          readOnly={readOnly}
          modules={displayStatusToolbaar ? defaultmodule : modules}
          placeholder="enter your notes here..."
          className="quill"
        />
        <div
        className={`color-picker-container ${statusColorPicker}`}
      >
        <div
          onClick={() => containerBackgroundColorHandler("color-yellow")}
          className="round-colors color-yellow"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-green")}
          className="round-colors color-green"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-orange")}
          className="round-colors color-orange"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-aqua")}
          className="round-colors color-aqua"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-skyblue")}
          className="round-colors color-skyblue"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-greenYellow")}
          className="round-colors color-greenYellow"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-violet")}
          className="round-colors color-violet"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-grey")}
          className="round-colors color-grey"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-pink")}
          className="round-colors color-pink"
        ></div>
      </div>
        <div className="low-level-container">
          <div className="publish-date-container color-secondary font-sm">
            Created at: {todayDay}/{todayMonth}/{todayYear}
          </div>
          <div className="icons-container">
            <span className="color-secondary" onClick={clickHandler}>
              {displayEditIcon}
            </span>
            
            <LabelOutlinedIcon className="color-secondary" />
            {isArchive === true ? <UnarchiveOutlinedIcon className="color-secondary" onClick={()=>removeNotesToArchiveHandler(item._id)}/> : <ArchiveOutlinedIcon className="color-secondary" onClick={()=>addNotesToArchiveHandler(title, value, containerBgColor,year,month,day,item._id)}/> }
            {isArchive === true ? <DeleteOutlinedIcon className="color-secondary" onClick={() => deleteNoteFromArchivesHandler(item._id)} /> : <DeleteOutlinedIcon className="color-secondary" onClick={() => deleteNotesHandler(item._id)} />}
          </div>
        </div>
      </div>
    </>
  );
};
