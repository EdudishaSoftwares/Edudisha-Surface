import "./App.css";
<<<<<<< HEAD

import Button_2 from "./atoms/Button_2";

function App() {
=======

function App() {
  const [count, setCount] = useState(0);
>>>>>>> 603e00bd3231e97a8c8c3db6272e32dce2d9da9a

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
