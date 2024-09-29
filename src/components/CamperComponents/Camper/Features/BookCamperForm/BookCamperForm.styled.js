import { Field, Form } from "formik";
import Calendar from "react-calendar";
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

export const CamperCalendar = styled.div`
  position: absolute;
  z-index: 1000;
  border-radius: 12px;
  width: 276px;
  height: 284px;
  background: var(--white);
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledCalendar = styled(Calendar)`
  border: 1px solid var(--primary-text-color);
  border-radius: 12px;
  padding: 12px;

  .react-calendar {
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .react-calendar__month-view {
    display: flex;
    width: 100%;
  }

  .react-calendar__tile {
    border-radius: 32px;
    transition: background 0.5s;
    color: var(--primary-text-color);
    background-color: transparent;
    font-family: var(--font-family);
    font-weight: var(--regular-font);
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    color: var(--main-color);
    border: none;
  }

  .react-calendar__tile:hover {
    background: var(--primary-text-color);
    color: var(--primary-inputs-color);
  }

  .react-calendar__tile--active {
    color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background: var(--primary-text-color);
    color: var(--primary-inputs-color);
  }

  .react-calendar__tile--disabled {
    color: var(--secondary-gray-light);
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__navigation button:disabled {
    background: transparent;
  }

  .react-calendar__navigation__label {
    background: transparent;
  }

  .react-calendar__navigation__label__labelText,
  .react-calendar__navigation__label__labelText--from {
    color: var(--main-color);
  }

  .react-calendar__navigation {
    color: var(--primary-inputs-color);
    border: none;
    background: transparent;
    margin: 0;
  }

  .react-calendar__month-view__weekdays {
    border-bottom: 1px solid var(--primary-text-color);
    font-family: var(--font-family);
    font-weight: var(--bolt-font);
    font-size: 12px;
    line-height: 1.2;
    color: var(--main-color);

    padding-bottom: 8px;
  }

  .react-calendar__month-view__days {
    width: 252px;
    margin-top: 10px;
  }

  .react-calendar__tile,
  .react-calendar__month-view__days__day,
  .react-calendar__month-view__days__day--weekend {
    width: 36px;
    height: 32px;
  }

  .blocked-date {
    color: var(--secondary-gray-light);
  }

  .different-month {
    color: var(--secondary-gray-light);
  }

  .blocked-date {
    color: var(--secondary-gray-light);
    pointer-events: none;
  }
`;
