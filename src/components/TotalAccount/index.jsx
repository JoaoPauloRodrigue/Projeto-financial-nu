import "./style.css";

export const TotalAccount = ({ cardList }) => {
  const sumAccountTotal = cardList.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.money;
  }, 0);
  return (
    <div className="container-total-account">
      <section className="section-total-account">
        <div className="container-information-total-money-accout">
          <h2 className="total-money-title">Valor Total:</h2>
          <span className="total-money-value">{`R$: ${sumAccountTotal}`}</span>
        </div>
        <p className="total-money-description">O valor se refere ao saldo</p>
      </section>
    </div>
  );
};
