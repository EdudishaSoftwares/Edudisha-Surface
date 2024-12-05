import { useState } from "react";
import Button from "../../../atoms/Button";
import FlexboxGrid from "../../../atoms/FlexboxGrid";
import Heading from "../../../atoms/Heading";
import CallIcon from "../../../atoms/Icons/Call";
import MailIcon from "../../../atoms/Icons/Mail";
import Input from "../../../atoms/Input";
import InputGroup from "../../../atoms/InputGroup";
import Link from "../../../atoms/Link";
import Text from "../../../atoms/Text";
import SubmissionCelebrateIcon from "../../../atoms/Icons/SubmissionCelebrate";
import style from "./BookDemoFrom.module.scss";
import classNames from "classnames/bind";
import { BookFreeDemoFormComponentProps } from "./types";
import {
  BookDemoRequestPayloadType,
  BookDemoRequestResponseType,
} from "../../../typings/bookDemoReqest.types";
import { bookDemoRequest } from "../../../services/LandingPage/bookDemoRequest";

const cx = classNames.bind(style);

const BookDemoForm = (props: BookFreeDemoFormComponentProps) => {
  const { setBookFreeDemoModal, ...rest } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loaing, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [failureMessage, setFailureMessage] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (email: string) => {
    const phoneNumberRegex = /^[6-9]\d{9}$/;
    return phoneNumberRegex.test(email);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (firstName.length < 2) {
      setFailureMessage("Please enter valid first name");
    } else if (lastName.length < 2) {
      setFailureMessage("Please enter valid last name");
    } else if (!validateEmail(email)) {
      setFailureMessage("Please enter valid email");
    } else if (!validatePhoneNumber(phoneNumber)) {
      setFailureMessage("Please select valid date time");
    } else {
      const bookDemoRequestPayload: BookDemoRequestPayloadType = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        message: message,
      };

      const res: BookDemoRequestResponseType = await bookDemoRequest(
        bookDemoRequestPayload
      );

      if (res.message == "Success") {
        setSuccess(true);
      } else {
        setFailureMessage("Something Went Wrong");
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
      <Text
        mt="sm"
        mb={failureMessage || success ? "sm" : "xxl"}
        color="grey-6"
        size="sm"
      >
        You can reach us anytime
      </Text>

      {success ? (
        <>
          <FlexboxGrid className={cx("full-width")} justify="center" mb="lg">
            <SubmissionCelebrateIcon height={210} width={210} />
          </FlexboxGrid>
          <Heading level={4} className={cx("margin-auto")}>
            Success
          </Heading>
          <Text
            size="sm"
            mt="sm"
            mb="xl"
            align="center"
            className={cx("full-width")}
          >
            Our team will contact you soon!
          </Text>
          <Button
            mb="md"
            backgroundColor="white"
            className={cx("book-free-demo-close-button", "full-width")}
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
              className={cx("full-width")}
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
          <InputGroup
            mb="xl"
            className={cx("book-free-demo-input-group", "full-width")}
          >
            <FlexboxGrid>
              <FlexboxGrid.Item>
                <Text mt="md">
                  <CallIcon
                    width={18}
                    height={18}
                    fill="grey-6"
                    stroke="grey-6"
                  />
                </Text>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <Input
                  required
                  setInput={setPhoneNumber}
                  type="number"
                  value={phoneNumber}
                  placeholder="Phone Number"
                />
              </FlexboxGrid.Item>
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
              className={cx("book-free-demo-submit-button", "full-width")}
              onClick={handleSubmit}
            >
              <Text weight="bold" color="white">
                Submit
              </Text>
            </Button>
          ) : (
            <Button
              loading
              mb="xl"
              backgroundColor="blue-1"
              className={cx("book-free-demo-submit-button", "full-width")}
              onClick={handleSubmit}
            >
              <Text weight="bold" color="blue-1">
                Loading
              </Text>
            </Button>
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
