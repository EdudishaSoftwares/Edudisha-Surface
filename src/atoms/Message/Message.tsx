import React from "react";

// Atoms
import Flexbox from "../Flexbox";
import Text from "../Text";

// Types
import { MessageComponentProps, MessageIconType } from "./types";

// Style
import styles from "./Message.module.scss";
import classNames from "classnames/bind";
import InfoIcon from "../icons/InfoIcon";
import Warning from "../icons/Warning";
import Success from "../icons/Success";
import Cross from "../icons/Cross";

const cx = classNames.bind(styles);

const Message = (props: MessageComponentProps): JSX.Element => {
  const { type, message, isClosable = true, onClose } = props;
  const [isCrossClicked, setIsCrossClicked] = React.useState<boolean>(false);

  const handleCrossClicked = React.useCallback(() => {
    setIsCrossClicked(true);
    onClose && onClose();
  }, [onClose]);

  if (isCrossClicked) return <></>;

  const messageIcon: MessageIconType = {
    primary: <InfoIcon height={16} width={16} fillPath="var(--primary)" />,
    info: <InfoIcon height={16} width={16} fillPath="var(--headings)" />,
    error: <Warning />,
    success: <Success />,
    warning: <Warning fillPath="var(--status-yellow)" />,
  };

  return (
    <Flexbox
      direction="row"
      justify="space-between"
      align="middle"
      nowrap
      className={cx("message", `message-${type}`)}
    >
      <Flexbox direction="row" align="middle" nowrap>
        {messageIcon[type]}
        <Text
          color={"headings"}
          styleguide="body2"
          ml="sm"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </Flexbox>
      {isClosable && (
        <div onClick={handleCrossClicked} className={cx("cross-icon")}>
          <Cross />
        </div>
      )}
    </Flexbox>
  );
};

export default Message;
