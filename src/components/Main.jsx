import styled from "styled-components";
import { Container } from "./Container";
import {
  decrementItem,
  removeItem,
  selectBasketItems,
  selectItemQuantity,
} from "../features/CardBtn/addToBasket-slice";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.main`
  padding: 0 0;
  display: flex;
  gap: 19px;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

const Badges = styled.div`
  max-width: 500px;
  // height: 300px;
  height: 100%;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
`;
const BadgesTytle = styled.div`
  font-size: 28px;
  color: rgb(240, 110, 35);
  font-weight: var(--fw-bold);
`;
const BadgesImg = styled.div``;
const BadgesText = styled.div`
  font-weight: var(--fw-bold);
  color: rgb(190, 182, 190);
`;

export const Main = ({ children, items }) => {
  const counts = useSelector(selectBasketItems);

  // подсчет общего количества товаров
  const totalCount = counts.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = counts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <Wrapper>
      <Container>{children}</Container>
      <Badges className="Badges">
        <BadgesTytle>Your Cart({totalCount})</BadgesTytle>
        <>
          {totalPrice < 1 ? (
            <>
              <BadgesImg className="BadgesImg"></BadgesImg>
              <BadgesText>Your added items will appear here</BadgesText>
            </>
          ) : (
            <div className="Cart">
              {counts.map((item) => (
                <div
                  className="CartItem"
                  key={item.id}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div className="CartInfo">
                    <div className="CartName">{item.name}</div>
                    <div className="CartSum">
                      <div className="CartQuantity">{item.quantity}x</div>
                      <div className="CartPrice">${item.price}</div>
                      <div className="CartTotal">
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                  <div
                    className="CartClose"
                    onClick={() => handleRemove(item.id)}
                  >
                    <i className="material-icons">remove_circle_outline</i>
                  </div>
                </div>
              ))}
              <div className="TotalPrice">${totalPrice}</div>
              <div className="CartBtn">Pay</div>
            </div>
          )}
        </>
      </Badges>
    </Wrapper>
  );
};
