import styled from "styled-components";

export const OptionListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px;
`;

export const DescListItem = styled.li`
  border-radius: 100px;
  padding: 12px 18px;
  gap: 8px;
  font-family: "Inter", sans-serif;
  font-weight: var(--medium-font);
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: var(--main-color);
  background-color: var(--primary-gray-color);
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;
