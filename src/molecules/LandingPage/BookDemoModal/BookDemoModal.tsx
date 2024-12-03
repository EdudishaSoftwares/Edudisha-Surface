import FlexboxGrid from "../../../atoms/FlexboxGrid";
import Modal from "../../../atoms/Modal";
import BookDemoForm from "../../../organisms/LandingPage/BookDemoForm";
import ScetionCard from "../SectionCard";
import Image from "../../../atoms/Image";
import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import MailIcon from "../../../atoms/Icons/Mail";
import CallIcon from "../../../atoms/Icons/Call";
import style from "./BookDemoModal.module.scss";
import classNames from "classnames/bind";
import { BookDemoModalComponentProps } from "./types";
import Card from "../../../atoms/Card";
import CrossIcon from "../../../atoms/Icons/Cross";
import { Button } from "rsuite";

const cx = classNames.bind(style);

const ContactDetailsCard = () => {
  return (
    <FlexboxGrid direction="column" align="start">
      <FlexboxGrid.Item>
        <FlexboxGrid mt="xl">
          <MailIcon height={16} width={16} fill="grey-6" stroke="grey-6" />
          <Text size="md" ml="md" weight="medium" color="grey-6">
            bookfreedemonow@schoolup.com
          </Text>
        </FlexboxGrid>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>
        <FlexboxGrid mt="md">
          <CallIcon height={20} width={20} fill="grey-6" stroke="grey-6" />
          <Text size="md" ml="md" weight="medium" color="grey-6">
            +91 7041590049
          </Text>
        </FlexboxGrid>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>
        <FlexboxGrid mt="xl">
          <FlexboxGrid.Item colspan={11}>
            <Text size="lg" weight="semibold">
              Customer support
            </Text>
            <Text size="sm" weight="medium" color="grey-6">
              Our support team is available around the clock to address any
              concern or queries you may have.
            </Text>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={11}>
            <Text size="lg" weight="semibold">
              Response Time Promise
            </Text>
            <Text size="sm" weight="medium" color="grey-6">
              We aim to respond to all inquiries within 24 hours. Urgent matters
              will be prioritized.
            </Text>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

const BookDemoModal = (props: BookDemoModalComponentProps) => {
  const handleBookFreeDemoModalClose = () => {
    setBookFreeDemoModal(false);
  };

  const logoUrl = "https://cdn-icons-png.flaticon.com/512/308/308963.png";

  const { open, setBookFreeDemoModal, ...rest } = props;
  return (
    <Modal
      open={open}
      onClose={handleBookFreeDemoModalClose}
      size="lg"
      {...rest}
    >
      <FlexboxGrid direction="column" align="end">
        <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid align="start">
            <FlexboxGrid direction="column" align="start" mt="sm" ml="md">
              <FlexboxGrid>
                <FlexboxGrid.Item>
                  <Image
                    src={logoUrl}
                    alt="SchoolUp_Logo"
                    height="24px"
                    mr="md"
                  />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <Heading level={4} weight="extrabold">
                    SchoolUP
                  </Heading>
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid.Item>
                <Text size="xs" weight="medium" mr="sm">
                  The everything app for school.
                </Text>
              </FlexboxGrid.Item>
            </FlexboxGrid>

            <Card>
              <Button
                onClick={handleBookFreeDemoModalClose}
                className={cx("modal-close-button")}
              >
                <CrossIcon
                  height={18}
                  width={18}
                  fill="grey-6"
                  stroke="grey-6"
                />
              </Button>
            </Card>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <ScetionCard
          direction="row-reverse"
          label="Book Free Demo"
          title="Book Free Demo"
          description="Email, call, or complete the form to learn how SchoolUp can solve your management problems."
          gutter="xs"
          detailsChild={<ContactDetailsCard />}
          mb="xxl"
          mt="xxl"
          ml="xxl"
          mr="xxl"
        >
          <BookDemoForm setBookFreeDemoModal={setBookFreeDemoModal} />
        </ScetionCard>
      </FlexboxGrid>
    </Modal>
  );
};

export default BookDemoModal;
