
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/abuotUs/Aboutus";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";


function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />} />
 

      </Routes>

    </>
  );
}

export default App;





