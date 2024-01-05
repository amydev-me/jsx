import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button secondary outline  rounded>Click Me!</Button>
            </div>

            <div>
                <Button danger  outline>Click!</Button>
            </div>

            <div>
                <Button warning  outline>Click!</Button>
            </div>

            <div>
                <Button secondary  outline>Click!</Button>
            </div>

            <div>
                <Button primary  rounded>Click!</Button>
            </div>
        </div>
    );
}

export default App;