import FlexboxGrid from "../../../atoms/FlexboxGrid";
import Card from "../../../atoms/Card";
import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import Button from "../../../atoms/Button";
import RightTick from "../../../atoms/Icons/RightTick";
import ArrowLeftIcon from "../../../atoms/Icons/ArrowLeft";
import style from "./PricingCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const PricingCard = () => {
  return (
    <FlexboxGrid direction="column" className={cx("pricing-card")} mt="xxl">
      <FlexboxGrid.Item colspan={24}>
        <Card className={cx("pricing-card-title")}>
          <Heading
            level={3}
            weight="extrabold"
            color="white"
            className={cx("pricing-card-heading")}
          >
            Early Access Offer!
          </Heading>
        </Card>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
        <FlexboxGrid className={cx("pricing-card-features")}>
          <FlexboxGrid
            direction="column"
            align="start"
            className={cx("pricing-card-offer")}
          >
            <Heading level={2} weight="extrabold" color="green-2">
              Start Free
            </Heading>
            <Text size="lg" weight="extrabold">
              Best for all size organizations
            </Text>
            <Heading
              level={1}
              weight="extrabold"
              color="green-2"
              mt="xl"
              mb="xl"
            >
              Free
            </Heading>
            <FlexboxGrid align="end">
              <Heading level={2} weight="extrabold">
                $ 0
              </Heading>{" "}
              <Text as="span" size="xl" weight="extrabold" mb="xs">
                {" "}
                /per month
              </Text>
            </FlexboxGrid>
            <Button
              mt="lg"
              size="lg"
              className={cx("pricing-card-button")}
              backgroundColor="green-2"
            >
              <Text size="xl" weight="extrabold" color="white">
                Get Started <ArrowLeftIcon align="middle" fill="white" />
              </Text>
            </Button>
          </FlexboxGrid>
          <FlexboxGrid direction="column" align="start">
            <Text mb="lg" size="lg" weight="bold">
              Attendance Features
            </Text>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Facial Recognition
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Fingerprint Scanning
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Card Punching
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                QR Code Scanning
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Manual Entry
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Integration Capabilities
              </Text>
            </FlexboxGrid>
          </FlexboxGrid>
          <FlexboxGrid direction="column" align="start">
            <Text mb="lg" size="lg" weight="bold">
              Management Features
            </Text>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Role Based Access
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Duties Creation
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Duties Assigning
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Leave Application
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Leave Requests
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Tracking
              </Text>
            </FlexboxGrid>
          </FlexboxGrid>
          <FlexboxGrid direction="column" align="start">
            <Text mb="lg" size="lg" weight="bold">
              Other Features
            </Text>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Dashboards
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Reports
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Data Import/Export
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Mobile App
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                Customizable Settings
              </Text>
            </FlexboxGrid>
            <FlexboxGrid mb="lg">
              <RightTick height={14} width={14} fill="green-2" stroke="white" />
              <Text ml="md" size="lg">
                24/7 Support
              </Text>
            </FlexboxGrid>
          </FlexboxGrid>
        </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default PricingCard;
