import React, { useState} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  let pageSize = 5;
  let apiKey = "21fbad742d034252a83b3939d9f1cd72";
  // let apiKey = "b6d4a8f203ee4ea5a3da84e40b977f43";
  let country = "in";

  let [progress , setProgress] = useState(10);
  const [mode , setMode ] = useState("light");


  let changeProgress = (p)=>{
    setProgress(progress = p)
  }

  const toggleTheme = () =>{
    if(mode === "light"){
      document.body.style.backgroundColor = "rgb(0 10 20)";
      document.body.style.color = "white";
      setMode("dark");
    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light");
    }
  }
    
    return (
      <Router>
        <div>
          <Navbar toggleTheme={toggleTheme} mode={mode}/>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/general">
              <News changeProgress={changeProgress} mode={mode} key="general" country={country} category={"general"} pageSize={pageSize} apiKey={apiKey} />
            </Route>
            <Route exact path="/business">
              <News changeProgress={changeProgress} mode={mode} key="business" country={country} category={"business"} pageSize={pageSize} apiKey={apiKey} />
            </Route>
            <Route exact path="/entertainment">
              <News changeProgress={changeProgress} mode={mode} key="entertainment" country={country} category="entertainment" pageSize={pageSize} apiKey={apiKey} />
            </Route>
            <Route exact path="/health">
              <News changeProgress={changeProgress} mode={mode} key="health" country={country} category="health" pageSize={pageSize} apiKey={apiKey} />
            </Route>
            <Route exact path="/science">
              <News changeProgress={changeProgress} mode={mode} key="science" country={country} category="science" pageSize={pageSize} apiKey={apiKey} />
            </Route>
            <Route exact path="/sports">
              <News changeProgress={changeProgress} mode={mode} key="sports" country={country} category="sports" pageSize={pageSize} apiKey={apiKey} />
            </Route>
            <Route exact path="/technology">
              <News changeProgress={changeProgress} mode={mode} key="technology" country={country} category="technology" pageSize={pageSize} apiKey={apiKey} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  
}

export default App;



