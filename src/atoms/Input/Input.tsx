import React from "react";
import {
  AnimatedPlaceholderProps,
  InputProps,
  InputWrapperProps,
  StyledIconWrapperProps,
  TextAreaProps,
  WrapperProps,
} from "./type";

const Wrapper: React.FC<WrapperProps> = ({
  margin = "auto",
  children,
  align,
}) => <div style={{ margin, textAlign: align }}>{children}</div>;

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  inputWrapperStyle,
}) => (
  <div
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 8px",
      borderRadius: "4px",
      ...inputWrapperStyle,
    }}
  >
    {children}
  </div>
);

const StyledIconWrapper = React.forwardRef<
  HTMLDivElement,
  StyledIconWrapperProps
>(({ children }, ref) => (
  <div
    ref={ref}
    style={{
      backgroundColor: "#f0f0f0",
      padding: "10.5px 12px",
      borderRadius: "4px 0px 0px 4px",
      display: "flex",
      alignItems: "center",
      height: "24px",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
));

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      message,
      variant = "default",
      margin = "12px 0px",
      align,
      state,
      value = "",
      placeholder = "",
      textMessage = "",
      isTransparent = false,
      Icon,
      inputWrapperStyle,
      useAnimatedPlaceholder = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const iconWrapperRef = React.useRef<HTMLDivElement | null>(null);
    const [iconWrapperWidth, setIconWrapperWidth] = React.useState(0);

    React.useEffect(() => {
      if (iconWrapperRef.current) {
        setIconWrapperWidth(iconWrapperRef.current.offsetWidth);
      }
    }, [Icon, textMessage]);

    const handleFocus = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    };

    const ValidationIcon =
      state === "success" ? "✔️" : state === "error" ? "❌" : null;

    return (
      <Wrapper margin={margin} align={align}>
        <InputWrapper
          inputWrapperStyle={{ ...inputWrapperStyle }}
          disabled={disabled}
        >
          {(Icon || textMessage) && (
            <StyledIconWrapper ref={iconWrapperRef}>
              {Icon ? (
                <Icon style={{ width: "24px", height: "24px" }} />
              ) : (
                <span>{textMessage}</span>
              )}
            </StyledIconWrapper>
          )}
          {useAnimatedPlaceholder && (
            <AnimatedPlaceholder
              placeholder={placeholder}
              isInputFilled={!!value}
              isIconPresent={!!Icon}
              isTextMessage={!!textMessage}
              onClick={handleFocus}
              iconWrapperWidth={iconWrapperWidth}
            />
          )}
          <input
            ref={(current) => {
              inputRef.current = current;
              if (typeof ref === "function") ref(current);
              else if (ref) ref.current = current;
            }}
            style={{
              padding: "10px 12px",
              width:
                variant === "halfWidth"
                  ? "50%"
                  : variant === "fullWidth"
                  ? "100%"
                  : "auto",
              border: "1px solid #e5e5ea",
              outline: "none",
              fontSize: "16px",
              lineHeight: "24px",
              backgroundColor: isTransparent ? "transparent" : "white",
              color: "black",
            }}
            value={value}
            disabled={disabled}
            placeholder={useAnimatedPlaceholder ? "" : placeholder}
            {...props}
          />
          {ValidationIcon && (
            <span style={{ fontSize: "24px" }}>{ValidationIcon}</span>
          )}
        </InputWrapper>
        {message && (
          <div
            style={{
              padding: "5px",
              fontSize: "12px",
              lineHeight: "16px",
              color: state === "success" ? "green" : "red",
            }}
          >
            {message}
          </div>
        )}
      </Wrapper>
    );
  }
);

const AnimatedPlaceholder: React.FC<AnimatedPlaceholderProps> = ({
  placeholder = " ",
  isInputFilled = false,
  iconWrapperWidth,
  onClick,
}) => (
  <span
    onClick={onClick}
    style={{
      position: "absolute",
      left: iconWrapperWidth
        ? `${iconWrapperWidth + (isInputFilled ? 12 : 20)}px`
        : "12px",
      top: isInputFilled ? "-18px" : "50%",
      transform: isInputFilled ? "none" : "translateY(-50%)",
      transition: "all 0.3s ease",
      fontSize: isInputFilled ? "12px" : "16px",
      color: isInputFilled ? "gray" : "#a9a9a9",
      cursor: "text",
      pointerEvents: "none",
      whiteSpace: "nowrap",
    }}
  >
    {placeholder}
  </span>
);

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      state,
      message,
      variant = "default",
      placeholder = "",
      value = "",
      margin = "12px 0px",
      resize = "none",
      autoHeight = false,
      useAnimatedPlaceholder = true,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLTextAreaElement | null>(null);

    React.useEffect(() => {
      if (autoHeight && inputRef.current) {
        const handleResize = () => {
          inputRef.current!.style.height = "auto";
          inputRef.current!.style.height = `${Math.min(
            inputRef.current!.scrollHeight,
            250
          )}px`;
        };
        handleResize();
        inputRef.current.addEventListener("input", handleResize);
        return () =>
          inputRef.current?.removeEventListener("input", handleResize);
      }
    }, [autoHeight]);

    return (
      <Wrapper margin={margin}>
        <InputWrapper>
          <textarea
            ref={(current) => {
              inputRef.current = current;
              if (typeof ref === "function") ref(current);
              else if (ref) ref.current = current;
            }}
            style={{
              padding: "10px 12px",
              width:
                variant === "halfWidth"
                  ? "50%"
                  : variant === "fullWidth"
                  ? "100%"
                  : "auto",
              resize,
              display: "block",
              border: "1px solid #e5e5ea",
              outline: "none",
              fontSize: "16px",
              lineHeight: "24px",
              overflow: autoHeight ? "hidden" : "auto",
            }}
            value={value}
            placeholder="hey!!!"
            {...props}
          ></textarea>
          {useAnimatedPlaceholder && (
            <AnimatedPlaceholder
              placeholder={useAnimatedPlaceholder ? "" : placeholder}
              isInputFilled={!!value}
              onClick={() => inputRef.current?.focus()}
              iconWrapperWidth={0}
            />
          )}
        </InputWrapper>
        {message && (
          <div
            style={{
              padding: "5px",
              fontSize: "12px",
              lineHeight: "16px",
              color: state === "success" ? "green" : "red",
            }}
          >
            {message}
          </div>
        )}
      </Wrapper>
    );
  }
);

export { Input, TextArea };
