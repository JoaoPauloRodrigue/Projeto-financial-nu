import "./style.css";
import { CardList } from "./CardList";
import imageWithoutMoney from "../../assets/image/NoCard.svg";

export const WithoutMoney = () => {
  return (
    <div>
      <h2 className="title-register-resume">Resumo financeiro</h2>
      <h3 className="title-without-money">
        Você ainda não possui nenhum lançamento
      </h3>
      <img
        className="img-without-money"
        src={imageWithoutMoney}
        alt="imagem sem dinheiro"
      />
    </div>
  );
};

export const RegisterEntryAndExit = ({ cardList, deleteCardFromList }) => {
  return (
    <div className="container-register">
      <h2 className="title-register-resume">Resumo financeiro</h2>
      <ul className="container-cards-list">
        {cardList.map((card, index) => (
          <CardList
            key={index}
            card={card}
            deleteCardFromList={deleteCardFromList}
          />
        ))}
      </ul>
    </div>
  );
};
