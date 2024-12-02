import Button from "../../../atoms/Button";
import Divider from "../../../atoms/Divider";
import FlexboxGrid from "../../../atoms/FlexboxGrid";
import Heading from "../../../atoms/Heading";
import Image from "../../../atoms/Image";
import Text from "../../../atoms/Text";
import style from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { NavbarComponentType } from "./types";

const cx = classNames.bind(style);

const Navbar = (props: NavbarComponentType) => {
  const { setBookFreeDemoModal, ...rest } = props;

  const handleBookDemoClick = () => {
    setBookFreeDemoModal(true);
  };

  const logoUrl = "https://cdn-icons-png.flaticon.com/512/308/308963.png";
  return (
    <FlexboxGrid justify="space-between" align="center" {...rest}>
      <FlexboxGrid.Item>
        <FlexboxGrid align="center">
          <FlexboxGrid.Item>
            <FlexboxGrid
              align="center"
              className={cx(
                "nav-item-group-border",
                "nav-item-group-box-shadow"
              )}
              mr="lg"
              pl="lg"
              pr="lg"
              pt="md"
              pb="md"
            >
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
              <FlexboxGrid.Item>
                <Divider vertical className={cx("nav-item-divider")} />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <Text size="xs" weight="medium" color="grey" mr="sm">
                  The everything
                </Text>
                <Text size="xs" weight="medium" color="grey" mr="sm">
                  app for school.
                </Text>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid
            align="center"
            className={cx("nav-item-group-border", "nav-item-group-box-shadow")}
            pl="md"
            pr="md"
            pt="sm"
            pb="sm"
          >
            <Button appearance="link" href="#home" className={cx("nav-button")}>
              <Text size="lg" weight="medium">
                Home
              </Text>
            </Button>
            <Button
              appearance="link"
              href="#services"
              className={cx("nav-button")}
            >
              <Text size="lg" weight="medium">
                Services
              </Text>
            </Button>
            <Button
              appearance="link"
              href="#pricing"
              className={cx("nav-button")}
            >
              <Text size="lg" weight="medium">
                Pricing
              </Text>
            </Button>
            <Button appearance="link" href="#faqs" className={cx("nav-button")}>
              <Text size="lg" weight="medium">
                FAQs
              </Text>
            </Button>
          </FlexboxGrid>
        </FlexboxGrid>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>
        <FlexboxGrid
          align="center"
          justify="space-between"
          className={cx("nav-item-group-border", "nav-item-group-box-shadow")}
          pl="md"
          pr="md"
          pt="sm"
          pb="sm"
        >
          <Button appearance="subtle" className={cx("nav-button")} mr="sm">
            <Text size="lg">Log in</Text>
          </Button>
          <Button
            className={cx("nav-button", "gradient-background")}
            onClick={handleBookDemoClick}
          >
            <Text size="lg" color="white" weight="semibold">
              Book Free Demo
            </Text>
          </Button>
        </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Navbar;
