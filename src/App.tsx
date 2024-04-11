// import Input from "./Components/Input.tsx";
import Button from "./Components/Button.tsx";
import Container from "./Components/Container.tsx";

function App() {
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" /> */}
      {/* <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
    // </main> */}
      <Container as={Button}>Click Me</Container>
    </main>
  );
}

export default App;
