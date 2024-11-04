import "./App.css";

import Button_2 from "./atoms/Button_2";

function App() {

  return (
    <>
      <div>
        <Button_2
        backgroundColor="primary"
        color="white"

        borderWidth="sm"
        borderStyle="solid"
        borderColor="subtitles"
        borderRadius="sm"

        height="xl"
        minHeight="lg"
        maxHeight="xl"
        width="xxl"
        minWidth="lg"
        maxWidth="full"

        padding="xxl"

        onHoverBackgroundColor="white"
        onHoverBorderColor="primary"
        onHoverColor="primary"

        onHoverScaleUp

        disabled

        >
          Click Me
        </Button_2>
      </div>
    </>
  );
}

export default App;
