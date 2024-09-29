import { ErrorMessage, Formik } from "formik";
import {
  BookCamperFormStyled,
  BookCamperTitleContainer,
  BookCamperTitleStyled,
  CamperCalendar,
  ErrorMessageStyled,
  InputContainer,
  InputField,
  StyledCalendar,
  TextAreaField,
} from "./BookCamperForm.styled";
import Button from "../../../../common/Button/Button";
import * as Yup from "yup";
import { useRef, useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name should be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date().required("Date is required").nullable(),
  comment: Yup.string().max(200, "Comment can't exceed 200 characters"),
});

const BookCamperForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const inputRef = useRef(null);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const locale = "en-US";

  const blockedDates = [
    new Date(2024, 9, 16),
    new Date(2024, 9, 20),
    new Date(2024, 9, 25),
  ];

  const today = new Date();

  const isDateBlocked = (date) => {
    return blockedDates.some(
      (blockedDate) =>
        blockedDate.getFullYear() === date.getFullYear() &&
        blockedDate.getMonth() === date.getMonth() &&
        blockedDate.getDate() === date.getDate()
    );
  };

  const handleDateChange = (date, setFieldValue) => {
    setSelectedDate(date);
    setFieldValue("date", date);
    setShowCalendar(false);
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (date.getMonth() !== activeStartDate.getMonth()) {
        return "different-month";
      }
      if (isDateBlocked(date)) {
        return "blocked-date";
      }
    }
    return null;
  };
  return (
    <BookCamperTitleStyled>
      <BookCamperTitleContainer>
        <h3>Book your camper now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </BookCamperTitleContainer>
      <Formik
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
        initialValues={{ name: "", email: "", date: null, comment: "" }}
        validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <BookCamperFormStyled>
            <InputContainer>
              <InputField name="name" type="text" placeholder="Name*" />
              <ErrorMessage component={ErrorMessageStyled} name="name" />
            </InputContainer>
            <InputContainer>
              <InputField name="email" type="email" placeholder="Email*" />
              <ErrorMessage component={ErrorMessageStyled} name="email" />
            </InputContainer>
            <InputContainer>
              <InputField
                id="date-input"
                name="date"
                type="text"
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                placeholder="Booking date*"
                onClick={() => setShowCalendar(!showCalendar)}
                readOnly
              />
              {showCalendar && (
                <CamperCalendar ref={inputRef}>
                  <StyledCalendar
                    onChange={(date) => handleDateChange(date, setFieldValue)}
                    tileClassName={tileClassName}
                    minDetail="month"
                    value={activeStartDate}
                    locale={locale}
                    onActiveStartDateChange={({ activeStartDate }) =>
                      setActiveStartDate(activeStartDate)
                    }
                    tileDisabled={({ date }) =>
                      date < today || isDateBlocked(date)
                    }
                  />
                </CamperCalendar>
              )}
              <ErrorMessage component={ErrorMessageStyled} name="date" />
            </InputContainer>
            <InputContainer>
              <TextAreaField
                name="comment"
                as="textarea"
                placeholder="Comment"
              />
            </InputContainer>
            <Button type="submit">Submit</Button>
          </BookCamperFormStyled>
        )}
      </Formik>
    </BookCamperTitleStyled>
  );
};

export default BookCamperForm;
