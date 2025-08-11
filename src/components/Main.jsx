import styled from "styled-components";
import { Container } from "./Container";
import {
  selectBasketItems,
  selectBasketItemsCount,
  selectBasketItemsLength,
  selectItemQuantity,
} from "../features/CardBtn/addToBasket-slice";
import { useSelector } from "react-redux";

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
  height: 300px;
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

export const Main = ({ children, id }) => {
  const items = useSelector(selectBasketItems);

  // подсчет общего количества товаров
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Wrapper>
      <Container>{children}</Container>
      <Badges className="Badges">
        <BadgesTytle>Your Cart({totalCount})</BadgesTytle>
        <BadgesImg className="BadgesImg"></BadgesImg>
        <BadgesText>Your added items will appear here</BadgesText>
      </Badges>
    </Wrapper>
  );
};
