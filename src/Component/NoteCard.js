import React from "react";
import style from "../views/CatatanSederhana/style.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function NoteCard(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
    function handleEdit() {
        props.onEdit(props.id);
    }

    return (
        <div className={style.note}>
            <h1 className={style.h1_paragraph}>{props.title}</h1>
            <p className={style.paragraph}>{props.content}</p>
            <button className={style.btn_paragraph} onClick={handleClick}>
                <DeleteIcon />
            </button>
            <button className={style.btn_paragraph} onClick={handleEdit}>
                <EditIcon />
            </button>
        </div>
    );
}

export default NoteCard;
