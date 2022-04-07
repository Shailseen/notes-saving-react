import { useContext, useState } from "react";
import { createContext } from "react";
import { useToast } from "./toast-context";
import axios from "axios";

const NotesContext = createContext();
const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const { toastVal, setToastVal } = useToast();
  const [notesList, setNotesList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const encodedToken = localStorage.getItem("token");
  const addNotesCardHandler = async (
    title,
    value,
    containerBgColor,
    dateTime,
    tags,
  ) => {
    try {
      const response = await axios.post(
        "/api/notes",
        {
          note: {
            titleCard: title,
            valueCard: value,
            colorCard: containerBgColor,
            todayTime: dateTime,
            tagsHave: tags
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
    dateTime,
    id
  ) => {
    console.log(value)
    console.log(id)
    try {
      const response = await axios.post(
        `/api/notes/${id}`,
        {
          note: {
            titleCard: title,
            valueCard: value,
            colorCard: containerBgColor,
            todayTime: dateTime
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
    } catch (error) {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Notes update Failed!!`,
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

  const deleteNotesHandler = async (id) => {
    try {
      const response = await axios.delete(`/api/notes/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setNotesList(response.data.notes);
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Deleted Successfully!!`,
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

  const addNotesToArchiveHandler = async (
    title,
    value,
    containerBgColor,
    dateTime,
    _id
  ) => {
    console.log(_id);
    try {
      const response = await axios.post(
        `/api/notes/archives/${_id}`,
        {
          note: {
            titleCard: title,
            valueCard: value,
            colorCard: containerBgColor,
            todayTime: dateTime
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Notes archived Successfully!!`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
      setNotesList(response.data.notes);
      setArchiveList(response.data.archives);
    } catch (error) {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Failed to archive Your notes card!!! Please try again.`,
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

  const removeNotesToArchiveHandler = async (_id) => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${_id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Notes Un-archived Successfully!!`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
      setNotesList(response.data.notes);
      setArchiveList(response.data.archives);
    } catch (error) {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Failed to unarchive your notes card!!! Please try again.`,
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

  const deleteNoteFromArchivesHandler = async (_id) => {
    try {
      const response = await axios.delete(
        `/api/archives/delete/${_id}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Delete Notes from Un-archived Successfully!!`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
      setNotesList(response.data.notes);
      setArchiveList(response.data.archives);
    } catch (error) {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Failed to delete unarchive your notes card!!! Please try again.`,
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

  
  
  return (
    <NotesContext.Provider
      value={{
        addNotesCardHandler,
        saveNotesHandler,
        deleteNotesHandler,
        addNotesToArchiveHandler,
        removeNotesToArchiveHandler,
        deleteNoteFromArchivesHandler,
        notesList,
        archiveList,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { useNotes, NotesProvider };
