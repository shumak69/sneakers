import { useAppDispatch } from '../../app/hooks';
import { openCart } from '../../app/slices/card';
import styles from './Info.module.scss'
interface InfoProps {
    title: string, image: string, description:string;
}

const Info = ({ title, image, description }: InfoProps) => {
const dispatch = useAppDispatch();
  return (
    <div className={styles.cartEmpty}>
      <img className={styles.cartEmptyImg} width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p >{description}</p>
      <button onClick={() => dispatch(openCart(false))} className="greenButton">
        <img src="img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;