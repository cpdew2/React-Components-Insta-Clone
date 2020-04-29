/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage.js";
import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import LikeSection from "./components/PostsContainer/LikeSection";
import dummyData from "./dummy-data.js";
// import the PostsPage and SearchBar and add them to the App


const App = () => {
 const [data, setData] = useState(dummyData);

  return (
    <div className="App">
      <SearchBar />
      <PostsPage data = {data}/>
      <LikeSection />
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;
