import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropDownPage from "./pages/DropDownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
       <Sidebar />
      <div className="col-span-5">
      <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;