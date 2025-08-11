import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addToBasket,
  decrementItem,
  incrementItem,
  selectBasketItemQuantity,
  selectItemQuantity,
  SetAddToBasket,
  SetDecrement,
  SetIncrement,
} from "./addToBasket-slice";
import React from "react";

// Стили для кнопки "Добавить в корзину"
const Btn = styled.div`
  display: flex;
  cursor: pointer;
  gap: 8px;
  position: absolute;
  margin-top: -21px;
  margin-left: 61px;
  border: 1px solid rgb(245, 160, 34);
  padding: 10px 38px 2px 38px;
  border-radius: 28px;
  background: white;
`;

// Стили для блока с количеством товара
const BtnQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: -21px;
  margin-left: 61px;
  border: 1px solid rgb(245, 160, 34);
  padding: 10px 38px 2px 38px;
  border-radius: 28px;
  background: rgb(245, 160, 34);
  gap: 20px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  font-size: 20px;
`;

const CountText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

// const Btn = styled.div`
//   display: flex;
//   cursor: pointer;
//   gap: 8px;
//   position: absolute;
//   margin-top: -21px;
//   margin-left: 61px;
//   border: 1px solid rgb(245, 160, 34);
//   padding: 10px 38px 2px 38px;
//   border-radius: 28px;
//   background: white;
// `;
const BtnIcon = styled.div`
  color: orange;
`;
const BtnText = styled.div`
  color: black;
  font-weight: var(--fw-bold);
  font-size: 16px;
`;
// const BtnQuantity = styled.div`
//   display: flex;
//   gap: 27px;
//   position: absolute;
//   margin-top: -21px;
//   margin-left: 61px;
//   border: 1px solid rgb(245, 160, 34);
//   padding: 10px 38px 2px 38px;
//   border-radius: 28px;
//   background: rgb(245, 160, 34);
// `;
const BtnIncrement = styled.div`
  cursor: pointer;
`;
const BtnList = styled.div``;
const BtnDecrement = styled.div`
  cursor: pointer;
`;

export const CardBtn = ({ items }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => selectItemQuantity(state, items.id));

  // Если кол-во меньше 1, показываем кнопку "Добавить в корзину"
  const handleAdd = () => {
    dispatch(addToBasket(items));
  };

  const handleIncrement = () => {
    dispatch(incrementItem(items.id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(items.id));
  };

  return (
    <>
      {quantity < 1 ? (
        <Btn onClick={handleAdd}>
          <i className="material-icons">shopping_cart</i>
          <div>Add to Cart</div>
        </Btn>
      ) : (
        <BtnQuantityWrapper>
          <IconWrapper onClick={handleDecrement}>
            <i className="material-icons">remove_circle_outline</i>
          </IconWrapper>
          <CountText>{quantity}</CountText>
          <IconWrapper onClick={handleIncrement}>
            <i className="material-icons">add_circle_outline</i>
          </IconWrapper>
        </BtnQuantityWrapper>
      )}
    </>
  );
  // return (
  //   <Btn onClick={handleAddToBasket}>
  //     <BtnIcon>
  //       <i class="material-icons">shopping_cart</i>
  //     </BtnIcon>
  //     <BtnText>Add to Cart</BtnText>
  //   </Btn>
  //   <BtnQuantity>
  //     <BtnDecrement onClick={handleDecrement}>
  //       <i class="material-icons">remove_circle_outline </i>
  //     </BtnDecrement>
  //     <BtnList>1</BtnList>
  //     <BtnIncrement onClick={handleIncrement}>
  //       <i class="material-icons">add_circle_outline</i>
  //     </BtnIncrement>
  //   </BtnQuantity>
  // );
};
