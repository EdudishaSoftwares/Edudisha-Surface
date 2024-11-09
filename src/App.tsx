import "./App.css";
import LinkText from "./atoms/Link";
import Text from "./atoms/Text";
// import Label from "./atoms/Label";
// import DropDown from "./atoms/DropDown";
// import CheckboxGroup from "./atoms/CheckboxGroup";
// import LandingPageNavbar from "./molecules/LandingPage/NavBar";

// const handleChange = ()=>{

// }

function App() {
  return (
    <>
      <div>
        {/* <LandingPageNavbar /> */}
        {/* <CheckboxGroup options={["one", "one","two", "three", "four"]} active={["one", "two"]} onChange={handleChange} id="test"></CheckboxGroup> */}
        {/* <DropDown multiSelect={false} title="test" size="xl" maxWidth="xxl" data={[{label:"one", value:"1"},{label:"two", value:"2"}]}></DropDown> */}
        {/* <Label type="primary" label="Check" state="success" /> */}
        <LinkText relative="full" to="google.com" > <Text styleguide="body1" underlineOnHover> Link </Text> </LinkText>
      </div>
    </>
  );
}

export default App;
