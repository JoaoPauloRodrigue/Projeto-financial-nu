import { useState } from "react";
import { Button } from "../Button";
import "./style.css";

export const FormAccount = ({ typeCategory, addCardToList }) => {
  const [formAccountData, setFormAccountData] = useState({
    title: "",
    money: 0,
    category: typeCategory[0].value,
  });

  const formToSubmit = (event) => {
    event.preventDefault();
    addCardToList(formAccountData);
    setFormAccountData({
      title: "",
      money: 0,
      category: typeCategory[0].value,
    });
  };
  return (
    <div className="form-container">
      <form onSubmit={formToSubmit} className="form">
        <div className="container-input-description">
          <label htmlFor="title">Descrição</label>
          <input
            id="title"
            value={formAccountData.title}
            name="title"
            className="input-description"
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) =>
              setFormAccountData({
                ...formAccountData,
                title: event.target.value,
              })
            }
          />
          <p className="exemple-subtitle">Ex: compra de roupas</p>
        </div>

        <div className="container-input-value-and-select">
          <div className="container-input-value">
            <label htmlFor="money">Valor</label>
            <input
              id="money"
              value={formAccountData.money}
              name="money"
              className="input-value"
              type="number"
              placeholder="1"
              onChange={(event) =>
                setFormAccountData({
                  ...formAccountData,
                  money: parseFloat(event.target.value),
                })
              }
            />
          </div>

          <div className="container-select-form">
            <label htmlFor="category">Tipo de valor</label>
            <select
              className="select-type"
              name="category"
              id="category"
              onChange={(event) =>
                setFormAccountData({
                  ...formAccountData,
                  category: event.target.value,
                })
              }
            >
              {typeCategory.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button className="btn-submit-form" type="submit">
          Inserir valor
        </Button>
      </form>
    </div>
  );
};
