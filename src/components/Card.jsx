import styled from "styled-components";
import { CardBtn } from "../features/CardBtn/CardBtn";
import { useDispatch } from "react-redux";
import { addToBasket } from "../features/CardBtn/addToBasket-slice";

const Wrapper = styled.article`
  border-radius: var(--radii);
  // background-color: car(--colors-ui-base);
  // box-shadow: var(--shadow);
  overflow: hidden;
  border: none;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 307px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
  border-radius: 40px;
`;

const CardBody = styled.div`
  // padding: 1rem 1.5rem 2rem;
  padding: 0px 0px 1px 0px;
  margin-top: 40px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  // font-weight: var(--fw-bold);
  color: grey;
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardName = styled.h2`
  font-size: 18px;
  font-weight: var(--fw-bold);
`;

const CardPrice = styled.h3`
  font-size: 20px;
  color: rgb(240, 110, 35);
  font-weight: var(--fw-bold);
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Card = ({ image, name, category, price, id, info = [] }) => {
  const item = { image, name, category, price, info, id };

  return (
    <Wrapper>
      <CardImage src={image} alt={name} />
      <CardBtn items={item}></CardBtn>
      <CardBody>
        <CardTitle>{category}</CardTitle>
        <CardName>{name}</CardName>
        <CardPrice>${price}</CardPrice>
      </CardBody>
    </Wrapper>
  );
};
