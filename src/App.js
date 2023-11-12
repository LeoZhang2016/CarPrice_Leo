/*
 * @Descripttion: 
 * @version: 
 * @Author: smile
 * @Date: 2023-11-11 10:02:11
 * @LastEditors: smile
 * @LastEditTime: 2023-11-12 18:44:55
 */
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import "./scss/components/content.scss";


function App() {
  return (
    <div className="App">    
      <Navbar />
      <div className="content">
          <div className="content_container">
            <h1>Search USed Car Prices</h1>
            <Filter />
          </div>          
      </div>
      <Footer/>      
    </div>
  );
}

export default App;
