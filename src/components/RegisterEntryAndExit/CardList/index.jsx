import "./style.css";
import { IoMdTrash } from "react-icons/io";

export const CardList = ({ card, deleteCardFromList }) => {
  return (
    <div className="container-card-list">
      <li className="card">
        <div className="container-all-information-card">
          <div className="container-title-and-category-card">
            <h2 className="title-card">{card.title}</h2>
            <p className="type-category-card">{card.category}</p>
          </div>
          <div className="container-value-and-btn-delete">
            <span className="value-card">{`R$ ${card.money}`}</span>
            <div className="container-btn-delete">
              <IoMdTrash
                className="btn-delete"
                onClick={() => deleteCardFromList(card.title)}
              />
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
