import { useState } from "react";
import Button from "../../../atoms/Button";
import DatePicker from "../../../atoms/DatePicker";
import FlexboxGrid from "../../../atoms/FlexboxGrid";
import Heading from "../../../atoms/Heading";
import CalendarIcon from "../../../atoms/Icons/Calendar";
import MailIcon from "../../../atoms/Icons/Mail";
import Input from "../../../atoms/Input";
import InputGroup from "../../../atoms/InputGroup";
import Link from "../../../atoms/Link";
import Text from "../../../atoms/Text";
import SubmissionCelebrateIcon from "../../../atoms/Icons/SubmissionCelebrate";
import style from "./BookDemoFrom.module.scss";
import classNames from "classnames/bind";
import { BookFreeDemoFormComponentProps } from "./types";

const cx = classNames.bind(style);

type FreeDemoRequestPayloadType = {
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
  message: string;
};

const BookDemoForm = (props: BookFreeDemoFormComponentProps) => {
  const submitFreeDemoRequest = (
    freeDemoRequestPayload: FreeDemoRequestPayloadType
  ) => {
    return freeDemoRequestPayload
      ? { ok: true, errorMessage: "" }
      : { ok: false, errorMessage: "Some thing went wrong" };
  };
  const { setBookFreeDemoModal, ...rest } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState();
  const [message, setMessage] = useState("");

  const [loaing, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [failureMessage, setFailureMessage] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (firstName.length < 2) {
      setFailureMessage("Please enter valid first name");
    } else if (lastName.length < 2) {
      setFailureMessage("Please enter valid last name");
    } else if (!validateEmail(email)) {
      setFailureMessage("Please enter valid email");
    } else if (!date) {
      setFailureMessage("Please select valid date time");
    } else {
      const freeDemoRequestPayload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        date: date,
        message: message,
      };

      const res = await submitFreeDemoRequest(freeDemoRequestPayload);

      if (res.ok) {
        setSuccess(true);
      } else {
        setFailureMessage(res.errorMessage);
      }
    }

    setLoading(false);
  };

  const handleClose = () => {
    setBookFreeDemoModal(false);
  };

  return (
    <FlexboxGrid
      direction="column"
      align="start"
      className={cx("book-free-demo-form")}
      {...rest}
    >
      <Heading>Get in Touch</Heading>
      <Text mt="sm" mb={failureMessage ? "sm" : "xxl"} color="grey-6" size="sm">
        You can reach us anytime
      </Text>

      {success ? (
        <>
          <FlexboxGrid
            className={cx("book-free-demo-success")}
            justify="center"
            mb="xxl"
          >
            <SubmissionCelebrateIcon height={220} width={220} />
          </FlexboxGrid>
          <Button
            mb="xl"
            backgroundColor="white"
            className={cx("book-free-demo-close-button")}
            onClick={handleClose}
          >
            <Text weight="bold" color="black">
              Close
            </Text>
          </Button>
        </>
      ) : (
        <>
          {failureMessage ? (
            <Text
              mt="sm"
              mb="md"
              color="red"
              size="sm"
              align="center"
              className={cx("book-free-demo-failure-message")}
            >
              {failureMessage}
            </Text>
          ) : (
            <></>
          )}

          <FlexboxGrid mb="xl" direction="row">
            <FlexboxGrid.Item colspan={12}>
              <Input
                required
                setInput={setFirstName}
                placeholder="First Name"
                className={cx("book-free-demo-input")}
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={11}>
              <Input
                required
                setInput={setLastName}
                placeholder="Last Name"
                className={cx("book-free-demo-input")}
              />
            </FlexboxGrid.Item>
          </FlexboxGrid>
          <InputGroup mb="xl" className={cx("book-free-demo-input-group")}>
            <FlexboxGrid>
              <FlexboxGrid.Item>
                <Text mt="sm">
                  <MailIcon fill="grey-6" stroke="grey-6" />
                </Text>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <Input
                  required
                  setInput={setEmail}
                  type="email"
                  placeholder="Your email"
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </InputGroup>
          <InputGroup mb="xl" className={cx("book-free-demo-input-group")}>
            <FlexboxGrid>
              <CalendarIcon fill="grey-6" stroke="grey-6" />
              <DatePicker
                value={date ? date : undefined}
                setDate={setDate}
                placeholder="Select date & time"
                format="MM/dd/yyyy HH:mm"
                noCalanderIcon
              />
            </FlexboxGrid>
          </InputGroup>
          <Input
            required
            setInput={setMessage}
            mb="xl"
            as="textarea"
            placeholder="Message"
            className={cx("book-free-demo-textarea")}
          />
          {!loaing ? (
            <Button
              mb="xl"
              backgroundColor="blue-1"
              className={cx("book-free-demo-submit-button")}
              onClick={handleSubmit}
            >
              <Text weight="bold" color="white">
                Submit
              </Text>
            </Button>
          ) : (
            <></>
          )}
          {loaing ? (
            <Button
              loading
              mb="xl"
              backgroundColor="blue-1"
              className={cx("book-free-demo-submit-button")}
              onClick={handleSubmit}
            >
              <Text weight="bold" color="blue-1">
                Submit
              </Text>
            </Button>
          ) : (
            <></>
          )}
          <Text size="sm" color="grey-6" align="center">
            By contacting us, you agree to our{" "}
            <Link to="#" relative="full" hoverColor="black">
              <Text as="span" color="black" weight="semibold">
                Terms of service
              </Text>
            </Link>{" "}
            and{" "}
            <Link to="#" relative="full" hoverColor="black">
              <Text as="span" color="black" weight="semibold">
                Privacy Policy
              </Text>
            </Link>
          </Text>
        </>
      )}
    </FlexboxGrid>
  );
};

export default BookDemoForm;
