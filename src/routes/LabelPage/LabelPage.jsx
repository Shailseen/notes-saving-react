import React, { useEffect, useState } from "react";
import { NotesCard } from "../../component/notesCard/notes-card";
import { useNotes } from "../../context/notes-context";
import styles from "./LabelPage.module.css";
export const LabelPage = () => {
  const { notesList } = useNotes();
  const categorySet = new Set();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    notesList?.forEach((note) =>
      note.tagsHave.forEach(({ tagName }) => categorySet.add(tagName))
    );
    if (categorySet.size) {
      let uniqueCategory = [];
      for (let item of categorySet) {
        uniqueCategory = [...uniqueCategory, item];
      }
      setCategoryList(uniqueCategory);
    }
  }, [notesList]);

  return (
    <div>
      {categoryList.length ? (
        categoryList.map((category) => {
          return (
            <div className={styles.category_container}>
              <div key={category} className={styles.category_name}>
                {category}
              </div>
              {notesList &&
                notesList.map((item) =>
                  item.tagsHave.map(
                    (itemName) =>
                      itemName.tagName === category && (
                        <NotesCard
                          isArchive={false}
                          key={item._id}
                          item={item}
                        />
                      )
                  )
                )}
            </div>
          );
        })
      ) : (
        <div>No label is added</div>
      )}
    </div>
  );
};
