import Accordion from "../../../atoms/Accordion";
import FlexboxGrid from "../../../atoms/FlexboxGrid";
import style from "./Faqs.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Faqs = () => {
  return (
    <FlexboxGrid mt="xxl">
      <FlexboxGrid.Item colspan={12}>
        <FlexboxGrid direction="column" align="start">
          <Accordion
            header="What tracking methods are supported?"
            panelText="Our system supports multiple tracking methods, including facial recognition, fingerprint scanning, QR code scanning, and manual entry. This flexibility ensures that you can choose the method that best suits your organization’s needs."
            bordered
            className={cx("accordion")}
          />
          <Accordion
            header="How does leave management work?"
            panelText="The leave management feature allows employees to request leave directly within the system. Managers can approve or deny requests, and the system automatically updates attendance records and leave balances."
            bordered
            className={cx("accordion")}
          />
          <Accordion
            header="Is the system scalable?"
            panelText="Yes, our attendance management system is designed to be scalable, accommodating the needs of small teams to large organizations. It grows with your needs, ensuring that you can manage attendance effectively as your organization expands"
            bordered
            className={cx("accordion")}
          />
          <Accordion
            header="What support is available during the trial"
            panelText="During your free trial, you’ll have access to our customer support team for any questions or issues you may encounter. We offer guidance and assistance to ensure you have a smooth experience."
            bordered
            className={cx("accordion")}
          />
        </FlexboxGrid>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
        <FlexboxGrid direction="column" align="end">
          <Accordion
            header="How does role-based access work?"
            panelText="Role-based access allows you to assign different levels of permissions to users based on their roles. This ensures that sensitive information and critical functions are only accessible to authorized personnel."
            bordered
            className={cx("accordion")}
          />
          <Accordion
            header="How do I start the free trial?"
            panelText="You can start your free trial by signing up on our website. You'll gain access to all the features of our attendance management system to explore its capabilities and see how it fits your needs."
            bordered
            className={cx("accordion")}
          />
          <Accordion
            header="How secure is the system?"
            panelText="Our system employs robust security measures, including encrypted data storage and secure access protocols, to protect your attendance data and ensure privacy."
            bordered
            className={cx("accordion")}
          />
          <Accordion
            header="What if I need a custom feature?"
            panelText="If you require a specific feature that is not currently available in our system, please let us know. We are committed to meeting our customers' needs and can consider adding custom features based on your requirements. Our support team will work with you to explore possible solutions and ensure the system meets your needs."
            bordered
            className={cx("accordion")}
          />
        </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Faqs;
