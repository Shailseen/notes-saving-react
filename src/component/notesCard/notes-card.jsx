import "react-quill/dist/quill.snow.css";
import "./notes-card.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNotes } from "../../context/notes-context";

export const NotesCard = ({ item, isArchive }) => {
  var year = new Date().getFullYear();
  var month = new Date().getMonth() + 1;
  var day = new Date().getDate();
  const {
    saveNotesHandler,
    notesList,
    deleteNotesHandler,
    addNotesToArchiveHandler,
    removeNotesToArchiveHandler,
    deleteNoteFromArchivesHandler,
    removeTagHandler,
  } = useNotes();

  const {
    titleCard,
    valueCard,
    colorCard,
    todayYear,
    todayMonth,
    todayDay,
    tagsHave,
  } = item;

  const [containerBgColor, setContainerBgColor] = useState(colorCard);

  const [title, setTitle] = useState(titleCard);

  const [enableEdit, setEnableEdit] = useState(false);

  const [viewTags, setViewTags] = useState(tagsHave);

  console.log(viewTags);

  const titleHandler = (eventValue) => {
    setTitle(eventValue);
  };

  const containerBackgroundColorHandler = (setColor) => {
    setContainerBgColor(setColor);
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

  function myHandler() {
    console.log("insid emy handler");
    console.log(value);
    saveNotesHandler(
      title,
      value,
      containerBgColor,
      year,
      month,
      day,
      item._id
    );
  }

  const [value, setValue] = useState(valueCard);

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
      <div
        key={item._id}
        className={`notes-card-container ${containerBgColor}`}
      >
        <input
          disabled={!enableEdit}
          className="title-bar"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => titleHandler(e.target.value)}
        />
        <ReactQuill
          value={value}
          onChange={(e) => setValue(e)}
          readOnly={!enableEdit}
          modules={enableEdit ? defaultmodule : modules}
          placeholder="enter your notes here..."
          className="quill"
        />
        <div className="tag-output-container">
          {viewTags.map(({ tagId, tagName }) => (
            <div className="tag-output" key={tagId}>
              {tagName}
            </div>
          ))}
        </div>
        <div className={`color-picker-container ${statusColorPicker}`}>
          {colorItems.map(({ id, color }) => (
            <div
              key={id}
              onClick={() => containerBackgroundColorHandler(color)}
              className={`round-colors ${color}`}
            ></div>
          ))}
        </div>
        <div className="low-level-container">
          <div className="publish-date-container color-secondary font-sm">
            Created at: {todayDay}/{todayMonth}/{todayYear}
          </div>
          <div className="icons-container">
            <span className="color-secondary">
              {enableEdit ? (
                <SaveIcon
                  onClick={() => {
                    setEnableEdit((p) => !p);
                    myHandler();
                    colorPickerHandler();
                  }}
                />
              ) : (
                isArchive === false && (
                  <EditIcon
                    onClick={() => {
                      setEnableEdit((p) => !p);
                      colorPickerHandler();
                    }}
                  />
                )
              )}
            </span>
            {/* implement later on label icon */}
            {/* <LabelOutlinedIcon
              className="color-secondary"
            /> */}
            {isArchive === true ? (
              <UnarchiveOutlinedIcon
                className="color-secondary"
                onClick={() => removeNotesToArchiveHandler(item._id)}
              />
            ) : (
              <ArchiveOutlinedIcon
                className="color-secondary"
                onClick={() =>
                  addNotesToArchiveHandler(
                    title,
                    value,
                    containerBgColor,
                    year,
                    month,
                    day,
                    item._id
                  )
                }
              />
            )}
            {isArchive === true ? (
              <DeleteOutlinedIcon
                className="color-secondary"
                onClick={() => deleteNoteFromArchivesHandler(item._id)}
              />
            ) : (
              <DeleteOutlinedIcon
                className="color-secondary"
                onClick={() => deleteNotesHandler(item._id)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
