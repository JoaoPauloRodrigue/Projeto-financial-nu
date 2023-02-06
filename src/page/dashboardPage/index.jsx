import "./style.css";
import { Header } from "../../components/Header";
import { FormAccount } from "../../components/Form";
import { TotalAccount } from "../../components/TotalAccount";
import {
  RegisterEntryAndExit,
  WithoutMoney,
} from "../../components/RegisterEntryAndExit";
import { cardData, categoryType } from "../../data/data";
import { useState } from "react";

export const DashboardPage = ({ setTurnThePage }) => {
  const [typeCategory, setTypeCategory] = useState(categoryType);
  const [cardList, setCardlist] = useState(cardData);

  const addCardToList = (cardData) => {
    setCardlist([...cardList, cardData]);
  };

  const deleteCardFromList = (cardTypeCategory) => {
    const updateCardList = cardList.filter(
      (card) => card.title !== cardTypeCategory
    );
    setCardlist(updateCardList);
  };
  return (
    <div className="dashboard-page">
      <Header setTurnThePage={setTurnThePage} />
      <main>
        <section className="form-account">
          <FormAccount
            addCardToList={addCardToList}
            typeCategory={typeCategory}
          />
          <TotalAccount cardList={cardList} />
        </section>

        <section className="display-money-account">
          {cardList.length == 0 ? (
            <WithoutMoney />
          ) : (
            <RegisterEntryAndExit
              cardList={cardList}
              deleteCardFromList={deleteCardFromList}
            />
          )}
        </section>
      </main>
    </div>
  );
};
