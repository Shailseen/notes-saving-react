import { useState } from "react";
import ReactQuill from "react-quill";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useNotes } from "../../context/notes-context";

const AddCard = () => {
    var year = (new Date()).getFullYear();
    var month = (new Date()).getMonth() + 1;
    var day = (new Date()).getDate();
  const { addNotesCardHandler } = useNotes();

  const [containerBgColor, setContainerBgColor] = useState("color-white");

  const [title, setTitle] = useState("");

  const containerBackgroundColorHandler = (setColor) => {
    setContainerBgColor(setColor);
  };

  const [statusColorPicker, setStatusColorPicker] = useState(
    "hide-color-picker"
  );

  const titleHandler = (eventValue) => {
    setTitle(eventValue);
  };

  const colorPickerHandler = () => {
    statusColorPicker === "show-color-picker"
      ? setStatusColorPicker("hide-color-picker")
      : setStatusColorPicker("show-color-picker");
  };

  const resetCardDataHandler = () => {
      setTitle("")
      setValue("")
      setContainerBgColor("color-white")
  }

  const module = {
    toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ color: [] }, { background: [] }],
      ],
  };

  const [value, setValue] = useState("");

  return (
    <>
      <div className={`notes-card-container ${containerBgColor}`}>
        <input
          onChange={(e) => titleHandler(e.target.value)}
          className="title-bar"
          type="text"
          placeholder="Title"
          value={title}
        />
        <ReactQuill
          value={value}
          onChange={setValue}
          modules={module}
          placeholder="enter your notes here..."
          className="quill"
        />
        <div className="low-level-container">
          <div></div>
          <div className="icons-container">
            <ColorLensOutlinedIcon
              className="color-secondary"
              onClick={colorPickerHandler}
            />
            <LabelOutlinedIcon className="color-secondary" />
            <button
              onClick={() => {
                addNotesCardHandler(title, value, containerBgColor,year,month,day);
                resetCardDataHandler()
              }}
              className="button-style-none solid-button"
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
      <div
        className={`color-picker-container box-shadow2 ${statusColorPicker}`}
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
          onClick={() => containerBackgroundColorHandler("color-white")}
          className="round-colors color-white"
        ></div>
        <div
          onClick={() => containerBackgroundColorHandler("color-pink")}
          className="round-colors color-pink"
        ></div>
      </div>
    </>
  );
};

export { AddCard };
