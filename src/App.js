import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ReactToPrint from "react-to-print";
import "./styles/app.css"


const App = () => {
  const [editMode, setEditMode] = useState(true);
  const componentRef = useRef();

  const changeMode = (e) => {
    if (e.target.innerHTML === 'Preview') {
      setEditMode(false);
    }
    else {
      setEditMode(true);
    }
  }

  const getPageMargins = () => {
    return `@page { margin: 5vh 5vw !important; }`;
  }

  return (
    <div className="all-content">
        <div>
          <Header />
          <div className="edit-btn-container">
            <button className="edit-btn" onClick={changeMode}>{!editMode ? "Edit" : "Preview"}</button>
            <ReactToPrint
              trigger={() => {
                return <button className={(editMode ? "hidden" : "visible") + " print-btn"}>Print</button>
              }}
              content={() => componentRef.current}
            />
          </div>
        </div>
        <div className="cv-content">
          <div className="to-print" ref={componentRef}>
            <style>{getPageMargins()}</style>
            <Profile editMode={editMode} />
            <About editMode={editMode} />
            <ExperienceList editMode={editMode} />
            <Education editMode={editMode} />
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       editMode: true,
//     };

//     this.changeMode = this.changeMode.bind(this);
//   }

//   changeMode(e) {
//     if (e.target.innerHTML === 'Preview') {
//       this.setState({
//         editMode: false,
//       });
//     }
//     else {
//       this.setState({
//         editMode: true,
//       });
//     }
//   }

//   getPageMargins = () => {
//     return `@page { margin: 5vh 5vw !important; }`;
//   };

//   render() {
//     return (
//       <div className="all-content">
//         <div>
//           <Header />
//           <div className="edit-btn-container">
//             <button className="edit-btn" onClick={this.changeMode}>{!this.state.editMode ? "Edit" : "Preview"}</button>
//             <ReactToPrint
//               trigger={() => {
//                 return <button className={(this.state.editMode ? "hidden" : "visible") + " print-btn"}>Print</button>
//               }}
//               content={() => this.componentRef}
//             />
//           </div>
//         </div>
//         <div className="cv-content">
//           <div className="to-print" ref={el => (this.componentRef = el)}>
//             <style>{this.getPageMargins()}</style>
//             <Profile editMode={this.state.editMode} />
//             <About editMode={this.state.editMode} />
//             <ExperienceList editMode={this.state.editMode} />
//             <Education editMode={this.state.editMode} />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     )
//   }
// }



