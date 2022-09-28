import unliked from "../assets/img/unliked.svg";
import sneakers1 from "../assets/img/sneakers/1.jpg";
function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src={unliked} alt="unliked" />
      </div>
      <img src={sneakers1} alt="sdf" width={133} height={112} />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Цена:</span>
          <b>12 999 грн.</b>
        </div>
        <button>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
              fill="#D3D3D3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
