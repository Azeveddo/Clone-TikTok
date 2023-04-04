import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={152}
          messages={250}
          shares={391}
          name={}
          description={}
          music={}
          url={}
        />

        <Video
          likes={222}
          messages={333}
          shares={444}
          name={}
          description={}
          music={}
          url={}
        />
                
      </div>
    </div>
  );
}
export default App;