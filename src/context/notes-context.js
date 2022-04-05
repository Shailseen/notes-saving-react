import { useContext, useState } from "react";
import { createContext } from "react";
import { useToast } from "./toast-context";
import axios from "axios";

const NotesContext = createContext();
const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const { toastVal, setToastVal } = useToast();
  const [notesList, setNotesList] = useState([]);
  const encodedToken = localStorage.getItem("token");
  const addNotesCardHandler = async (
    title,
    value,
    containerBgColor,
    year,
    month,
    day
  ) => {
    try {
      const response = await axios.post(
        "/api/notes",
        {
          note: {
            titleCard: title,
            valueCard: value,
            colorCard: containerBgColor,
            todayYear: year,
            todayMonth: month,
            todayDay: day,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setNotesList(response.data.notes);
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Added Successfully!!`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    } catch (error) {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Something went error!`,
        select: "error-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    }
  };

  const saveNotesHandler = async (
    title,
    value,
    containerBgColor,
    year,
    month,
    day,
    id
  ) => {
    try {
      const response = await axios.post(
        `/api/notes/${id}`,
        {
          note: {
            titleCard: title,
            valueCard: value,
            colorCard: containerBgColor,
            todayYear: year,
            todayMonth: month,
            todayDay: day,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setNotesList(response.data.notes);
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Updated Successfully!!`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    } catch (error) {console.log(error)}
  };
  return (
    <NotesContext.Provider
      value={{ addNotesCardHandler, saveNotesHandler, notesList }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { useNotes, NotesProvider };
