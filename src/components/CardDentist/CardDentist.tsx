import s from "./CardDentist.module.css";

function CardDentist() {
  return (
    <div className={s.card}>
      <img src="" alt="doctor" className={s.card__image} />
      <div className={s.card__info}>
        <div>
          <h4 className={`${s['card__text--bold']} ${s.card__text}`}>Elizabeth Huaranga</h4>
          <span className={s.card__text}>Especialista en ortodoncia</span>
        </div>
        <p className={s.card__text}>
          Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur
          adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus
          et, faucibus a nibh. Lorem ipsum dolor sit, but is increible m...
        </p>
      </div>
    </div>
  );
}
export default CardDentist;
