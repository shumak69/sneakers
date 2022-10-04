import styles from "./Info.module.scss";
interface InfoProps {
  title: string;
  image: string;
  description: string;
  buttonHandler: () => void;
}

const Info = ({ title, image, description, buttonHandler }: InfoProps) => {
  return (
    <div className={styles.cartEmpty}>
      <img
        className={styles.cartEmptyImg}
        width="120px"
        src={image}
        alt="Empty"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={buttonHandler} className="greenButton">
        <img src="img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
