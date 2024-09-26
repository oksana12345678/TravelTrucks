import styled from "styled-components";

export const OptionListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px;
`;



export const DescListItem = styled.li`
  border: 1px solid #dadde1;
  border-radius: 12px;
  padding: 16px 27px;
  width: 112px;
  height: 96px;
  gap: 8px;
  font-family: var(--font-family);
  font-weight: var(--medium-font);
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: var(--main-color);
  background-color: var(--primary-gray-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
`;
