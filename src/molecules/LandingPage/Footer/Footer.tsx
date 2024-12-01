import Divider from "../../../atoms/Divider";
import FlexboxGrid from "../../../atoms/FlexboxGrid";
import CalendarIcon from "../../../atoms/Icons/Calendar";
import ThunderIcon from "../../../atoms/Icons/Thunder";
import LockIcon from "../../../atoms/Icons/Lock";
import OdometerIcon from "../../../atoms/Icons/Odometer";
import Image from "../../../atoms/Image";
import Text from "../../../atoms/Text";
import Link from "../../../atoms/Link";
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import AppleIcon from "../../../atoms/Icons/Apple";
import AndroidIcon from "../../../atoms/Icons/Android";
import CopyRightIcon from "../../../atoms/Icons/CopyRight";

const cx = classNames.bind(style);

const Footer = () => {
  const logoUrl = "https://cdn-icons-png.flaticon.com/512/308/308963.png";
  return (
    <FlexboxGrid direction="column" mt="xxl">
      <FlexboxGrid.Item colspan={24}>
        <Divider className={cx("footer-horizontal-divider")} />
        <FlexboxGrid>
          <FlexboxGrid>
            <Image src={logoUrl} alt="Logo" height="24" />
            <Text ml="lg">The every thing app for school.</Text>
          </FlexboxGrid>
          <Divider vertical className={cx("footer-vertical-divider")} />
          <FlexboxGrid>
            <CalendarIcon height={18} width={18} />
            <Text ml="lg">24/7 Support</Text>
          </FlexboxGrid>
          <Divider vertical className={cx("footer-vertical-divider")} />
          <FlexboxGrid>
            <ThunderIcon height={18} width={18} />
            <Text ml="lg">Weekly Updates</Text>
          </FlexboxGrid>
          <Divider vertical className={cx("footer-vertical-divider")} />
          <FlexboxGrid>
            <LockIcon height={18} width={18} />
            <Text ml="lg">Secure and compliant</Text>
          </FlexboxGrid>
          <Divider vertical className={cx("footer-vertical-divider")} />
          <FlexboxGrid>
            <OdometerIcon height={18} width={18} />
            <Text ml="lg">99.9% uptime</Text>
          </FlexboxGrid>
        </FlexboxGrid>
        <Divider className={cx("footer-horizontal-divider")} />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
        <FlexboxGrid mt="xl" mb="xxl">
          <FlexboxGrid direction="column" align="left" justify="space-around">
            <Text weight="bold">Download App</Text>
            <FlexboxGrid>
              <Link
                to="#"
                relative="full"
                color="black"
                noHoverUnderline
                hoverColor="black"
              >
                <FlexboxGrid
                  mt="lg"
                  className={cx("footer-download-app-cover")}
                >
                  <AndroidIcon height={12} />
                  <Text ml="sm" color="black">
                    Android
                  </Text>
                </FlexboxGrid>
              </Link>
              <Link
                to="#"
                relative="full"
                color="black"
                noHoverUnderline
                hoverColor="black"
              >
                <FlexboxGrid
                  mt="lg"
                  ml="sm"
                  className={cx("footer-download-app-cover")}
                >
                  <AppleIcon height={12} />
                  <Text ml="sm" color="black">
                    iOS
                  </Text>
                </FlexboxGrid>
              </Link>
            </FlexboxGrid>
          </FlexboxGrid>
          <FlexboxGrid direction="column" align="end">
            <Text weight="bold">Legal</Text>
            <FlexboxGrid mt="lg" className={cx("footer-legal-cover")}>
              <CopyRightIcon height={12} />
              <Link ml="xs" to="#" relative="full" hoverColor="black">
                <Text color="black">SchoopUP</Text>
              </Link>
              <Link ml="lg" to="#" relative="full" hoverColor="black">
                <Text color="black">Privacy</Text>
              </Link>
              <Link ml="lg" to="#" relative="full" hoverColor="black">
                <Text color="black">Terms</Text>
              </Link>
            </FlexboxGrid>
          </FlexboxGrid>
        </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Footer;
