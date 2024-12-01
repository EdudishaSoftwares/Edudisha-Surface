import style from "./OverlayImageCard.module.scss";
import classNames from "classnames/bind";
import { OverlayImageCardProps } from "./types";
import Card from "../../../atoms/Card";
import Image from "../../../atoms/Image";

const cx = classNames.bind(style);

const OverlayImageCard = (props: OverlayImageCardProps) => {
  const {
    direction = "row",
    gradient = "orange",
    noShadow = false,
    imageUrl = "https://images.ctfassets.net/w8fc6tgspyjz/3cwY5YWcnQW63883rncd4h/36b49e6b6c7facf694ed4ad75bd84eb8/whiteboard_brainstorm.png?fm=avif&q=50&w=800",
    noImagePadding,
    ...rest
  } = props;
  return (
    <>
      <Card
        {...rest}
        pt="xl"
        pb="xl"
        borderRadius="lg"
        className={cx(`${gradient ? `gradient-${gradient}` : ""}`)}
      >
        <Card
          className={cx(
            `${direction ? `overlay-${direction}` : ""}`,
            `${
              !noShadow && direction ? `shadow-${direction}-${gradient}` : ""
            }`,
            `${noImagePadding ? `no-image-padding` : ""}`
          )}
        >
          <Image style={{ width: "100%" }} src={imageUrl} alt="Overlay Image" />
        </Card>
      </Card>
    </>
  );
};

export default OverlayImageCard;
