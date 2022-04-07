import { useState } from "react";
import ReactQuill from "react-quill";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useNotes } from "../../context/notes-context";

const AddCard = () => {
  var now = new Date();
  var dateTime=now.toUTCString();
  
  const { addNotesCardHandler } = useNotes();

  const [tags, setTags] = useState([]);

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
    setTitle("");
    setValue("");
    setContainerBgColor("color-white");
  };

  const module = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
    ],
  };

  const [value, setValue] = useState("");

  const colorItems = [
    {
      id: 1,
      color: "color-yellow",
    },
    {
      id: 2,
      color: "color-green",
    },
    {
      id: 3,
      color: "color-orange",
    },
    {
      id: 4,
      color: "color-aqua",
    },
    {
      id: 5,
      color: "color-skyblue",
    },
    {
      id: 6,
      color: "color-greenYellow",
    },
    {
      id: 7,
      color: "color-violet",
    },
    {
      id: 8,
      color: "color-grey",
    },
    {
      id: 9,
      color: "color-pink",
    },
  ];
  const labelTag = [
    { tagId: 1, tagName: "Office", isCheckd: false },
    { tagId: 2, tagName: "Work", isCheckd: false },
    { tagId: 3, tagName: "Home", isCheckd: false },
    { tagId: 4, tagName: "Market", isCheckd: false },
    { tagId: 5, tagName: "Wish", isCheckd: false },
  ];

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
        <div className={`label-container`}>
          {labelTag.map((item) => (
            <div>
              <input
                onClick={(e) =>
                  e.target.checked
                    ? setTags((prev) => [
                        ...prev,
                        { ...item, isCheckd: e.target.checked },
                      ])
                    : setTags((prev) => [
                        prev.filter((items) => items.tagId === item.tagId),
                      ])
                }
                className="cur-pointer"
                type="checkbox"
                name={item.tagName}
                id={item.tagName}
              />
              <label className="cur-pointer" htmlFor={item.tagName}>
                {item.tagName}
              </label>
            </div>
          ))}
        </div>
        <div className={`color-picker-container`}>
          {colorItems.map(({ id, color }) => (
            <div
              key={id}
              onClick={() => containerBackgroundColorHandler(color)}
              className={`round-colors ${color}`}
            ></div>
          ))}
        </div>
        <div className="low-level-container">
          <div></div>
          <div className="icons-container">
            <button
              onClick={() => {
                addNotesCardHandler(
                  title,
                  value,
                  containerBgColor,
                  dateTime,
                  tags
                );
                resetCardDataHandler();
              }}
              className="button-style-none solid-button button-style-set"
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { AddCard };
