import { Field, Form } from "formik";
import styled from "styled-components";

export const BookCamperTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--secondary-gray-light);
  width: 642px;
  justify-content: center;
  gap: 24px;
  padding: 0 56px;
  min-height: 588px;
  border-radius: 10px;
`;

export const BookCamperTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BookCamperFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 526px;
  gap: 14px;
  align-items: center;
`;

export const InputField = styled(Field)`
  height: 60px;
  background-color: var(--primary-inputs-color);
  border-radius: 12px;
  padding-left: 18px;
  border: none;
  width: 100%;
`;

export const TextAreaField = styled(Field)`
  height: 118px;
  background-color: var(--primary-inputs-color);
  border: none;
  border-radius: 12px;
  padding: 18px 0 0 18px;
  margin-bottom: 10px;
  width: 526px;
  overflow: scroll;
`;
export const InputContainer = styled.div`
  width: 526px;
`;

export const ErrorMessageStyled = styled.p`
  color: var(--button-hover-color);
`;
