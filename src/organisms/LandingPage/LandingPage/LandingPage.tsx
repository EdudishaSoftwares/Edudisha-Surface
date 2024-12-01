import { useState } from "react";
import FlexboxGrid from "../../../atoms/FlexboxGrid";
import Navbar from "../../../molecules/LandingPage/Navbar";
import BookDemoModal from "../../../molecules/LandingPage/BookDemoModal";
import ScetionCard from "../../../molecules/LandingPage/SectionCard";
import OverlayImageCard from "../../../molecules/LandingPage/OverlayImageCard";
import Image from "../../../atoms/Image";
import Faqs from "../../../molecules/LandingPage/Faqs";
import PricingCard from "../../../molecules/LandingPage/PricingCard";
import Footer from "../../../molecules/LandingPage/Footer";
import style from "./LandingPage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const LandingPage = () => {
  const [bookFreeDemoModal, setBookFreeDemoModal] = useState(false);

  const imageUrl =
    "https://images.ctfassets.net/w8fc6tgspyjz/3cwY5YWcnQW63883rncd4h/36b49e6b6c7facf694ed4ad75bd84eb8/whiteboard_brainstorm.png?fm=avif&q=50&w=800";

  return (
    <FlexboxGrid
      justify="space-between"
      direction="column"
      mt="xxl"
      className={cx("landing-page")}
    >
      <FlexboxGrid.Item colspan={18}>
        <Navbar setBookFreeDemoModal={setBookFreeDemoModal} />
        <BookDemoModal
          open={bookFreeDemoModal}
          setBookFreeDemoModal={setBookFreeDemoModal}
        />
        <ScetionCard
          mt="xxl"
          direction="row-reverse"
          titleLevel={1}
          title="Tech collaboration for modern schools."
          descriptionSize="lg"
          description="The only attendance management system that combines advanced tracking methods with seamless leave management—all in one intuitive platform."
          button="Get Started"
          buttonAsideText1="Try it for free."
          buttonAsideText2="No strings attached"
          gutter="xs"
          buttonGradient
          highMargin
        >
          <Image
            src={imageUrl}
            alt="Image"
            height={500}
            className={cx("landing-image")}
          />
        </ScetionCard>
        <ScetionCard
          mt="xxl"
          direction="row"
          label="Attendance Tracking"
          title="Advanced Attendance Methods"
          description="Flexible attendance with facial recognition, fingerprints, QR codes, card punching, or manual entry. Integrate with your hardware seamlessly."
          button="Get Started"
          gutter="xs"
          highMargin
        >
          <OverlayImageCard
            imageUrl={imageUrl}
            direction="row"
            gradient="orange"
            noImagePadding
          />
        </ScetionCard>
        <ScetionCard
          mt="xxl"
          direction="row-reverse"
          label="Leave Management"
          title="Centralized Leave Management"
          description="Simplify tracking and managing employee leave requests, and approval, ensuring seamless coordination and improved organizational efficiency across departments."
          button="Get Started"
          gutter="xs"
          highMargin
        >
          <OverlayImageCard
            imageUrl={imageUrl}
            direction="row-reverse"
            gradient="blue"
            noImagePadding
          />
        </ScetionCard>
        <ScetionCard
          mt="xxl"
          direction="row"
          label="Attendance Dashboard"
          title="Easy Attendance Monitoring"
          description="Get real-time insights and track attendance effortlessly with our intuitive dashboard, designed to make monitoring and visualizing data easy and efficient."
          button="Get Started"
          gutter="xs"
          highMargin
        >
          <OverlayImageCard
            imageUrl={imageUrl}
            direction="row"
            gradient="indigo"
            noImagePadding
          />
        </ScetionCard>
        <ScetionCard
          mt="xxl"
          direction="column-reverse"
          label="Pricing Models"
          title="Enjoy Full Access At No Cost"
          description="Try for free and discover how our attendance solution effortlessly aligns with your needs, streamlining processes and enhances productivity."
          gutter="xs"
          highMargin
        >
          <PricingCard />
        </ScetionCard>
        <ScetionCard
          mt="xxl"
          direction="column-reverse"
          label="Questions & Answers"
          title="Frequently Asked Questions"
          description="Quick answers to questions you may have. Can’t find what you are looking for?"
          link="Book Free Demo"
          gutter="xs"
          highMargin
        >
          <Faqs />
        </ScetionCard>
        <Footer />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default LandingPage;
