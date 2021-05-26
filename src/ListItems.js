import React from "react";
import "./item.css";
import DeleteIcon from "@material-ui/icons/Delete";

function ListItem(props) {
  const items = props.items;
  const listitems = items.map((item) => {
    return (
      <div className="style" key={item.key}>
        <p>
          {item.text}
          <span>
            <DeleteIcon onClick={() => props.DeleteItems(item.key)} />
          </span>
        </p>
      </div>
    );
  });
  return <div>{listitems}</div>;
}

export default ListItem;
