import style from "./ScetionCard.module.scss";
import classNames from "classnames/bind";
import { ScetionCardProps } from "./types";
import FlexboxGrid from "../../../atoms/FlexboxGrid";
import Card from "../../../atoms/Card";
import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import Link from "../../../atoms/Link";
import Button from "../../../atoms/Button";
import { GutterMap } from "../../../constants";
import ArrowLeftIcon from "../../../atoms/Icons/ArrowLeft";

const cx = classNames.bind(style);

const ScetionCard = (props: ScetionCardProps) => {
  const {
    label,
    title,
    titleLevel = 2,
    description,
    noBoldDescription,
    descriptionSize = "md",
    id,
    link,
    linkTo,
    button,
    buttonGradient = false,
    buttonAsideText1,
    buttonAsideText2,
    direction = "row",
    gutter,
    highMargin,
    detailsChild,
    children,
    onLinkClick,
    onButtonClick,
    ...rest
  } = props;
  return (
    <FlexboxGrid
      id={id}
      direction={direction}
      {...rest}
      className={cx(`${highMargin ? "high-margin" : ""}`)}
    >
      <FlexboxGrid.Item
        colspan={
          direction == "column" || direction == "column-reverse"
            ? 24
            : gutter
            ? (24 - GutterMap[gutter]) / 2
            : 12
        }
      >
        {children ? children : <></>}
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        colspan={
          direction == "column" || direction == "column-reverse"
            ? 24
            : gutter
            ? (24 - GutterMap[gutter]) / 2
            : 12
        }
      >
        <FlexboxGrid
          direction="column"
          align={`${
            direction == "row" || direction == "row-reverse"
              ? "start"
              : "center"
          }`}
        >
          {label ? (
            <Card className={cx("section-card-label")}>{label}</Card>
          ) : (
            <></>
          )}
          {title ? (
            <Heading
              level={titleLevel}
              weight="extrabold"
              className={cx("section-card-title")}
            >
              {title}
            </Heading>
          ) : (
            <></>
          )}
          {description ? (
            <Text
              size={descriptionSize}
              color="grey-6"
              weight={noBoldDescription ? "medium" : "semibold"}
              align={
                direction == "column" || direction == "column-reverse"
                  ? "center"
                  : undefined
              }
            >
              {description}{" "}
              {link && linkTo ? (
                <Link to={linkTo} onClick={onLinkClick} relative="full">
                  <Text
                    as="span"
                    size={descriptionSize}
                    weight="semibold"
                    color="blue"
                  >
                    {link}
                  </Text>
                </Link>
              ) : link && onLinkClick ? (
                <Card
                  as="span"
                  onClick={onLinkClick}
                  className={cx("link-card")}
                >
                  <Text
                    as="span"
                    size={descriptionSize}
                    weight="semibold"
                    color="blue"
                  >
                    {link}
                  </Text>
                </Card>
              ) : (
                <></>
              )}
            </Text>
          ) : (
            <></>
          )}
          {button ? (
            <FlexboxGrid mt="xxl" direction="row" align="center">
              <Button
                onClick={onButtonClick}
                size="lg"
                backgroundColor="grey-4"
                className={cx(
                  "section-card-button",
                  `${buttonGradient ? "buttonGradient" : ""}`
                )}
              >
                <Text
                  size="xl"
                  weight="extrabold"
                  color={buttonGradient ? "white" : "violet"}
                >
                  {button}{" "}
                  <ArrowLeftIcon
                    align="middle"
                    fill={buttonGradient ? "white" : "violet"}
                  />
                </Text>
              </Button>
              <Card>
                {buttonAsideText1 ? (
                  <Text
                    ml="xl"
                    size={descriptionSize}
                    weight="semibold"
                    color="grey-6"
                  >
                    {buttonAsideText1}
                  </Text>
                ) : (
                  <></>
                )}
                {buttonAsideText2 ? (
                  <Text
                    ml="xl"
                    size={descriptionSize}
                    weight="semibold"
                    color="grey-6"
                  >
                    {buttonAsideText2}
                  </Text>
                ) : (
                  <></>
                )}
              </Card>
            </FlexboxGrid>
          ) : (
            <></>
          )}
          {detailsChild ? <FlexboxGrid>{detailsChild}</FlexboxGrid> : <></>}
        </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default ScetionCard;
