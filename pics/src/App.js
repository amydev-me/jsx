// import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
    const handleSubmit = (term) => {
        console.log('Do a search')
        
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    )
}

export default App;