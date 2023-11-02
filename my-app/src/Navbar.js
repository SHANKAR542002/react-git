import React from 'react';
import { BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';
import Assignments from './Assignments.js';
import Calendar from './Calendar';
import Dashboard from './DashBoard1';
import Grades from './Grades';
import Help from './Help';
import Profile from './Profile';
import MyCourses from './MyCourse';
import Courses from './Courses';
import Logout from './Logout';

class Navbar extends React.Component {
    render() {
        return (
          
            <><head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
            </head>
            <nav className="navbar">
                <ul className="navbar-list">
                <i class="fa-brands fa-react fa-beat-fade"></i>                  <li className="navbar-item">
                        <Link to="/DashBoard1"><a className='
                        nnn'>Dashboard</a></Link>
                        </li>
                    <li className="navbar-item">
                        <Link to="/Courses"><a>Courses</a></Link>
                        </li>
                    <li className="navbar-item dropdown">
                        <Link to="/MyCourse"><a>My Courses</a></Link>
                        </li>
                    <li className="navbar-item">
                        <Link to="/Calendar"><a>Calendar</a></Link>
                        </li>
                    <li className="navbar-item">
                        <Link to="/Assignments"><a>Assignments</a></Link>
                        </li>
                    <li className="navbar-item">
                        <Link to="/Grades"><a>Grades</a></Link>
                        </li>
                    <li className="navbar-item">
                        <Link to="/Profile"><a>Profile</a></Link>
                        </li>
                    <li className="navbar-item">
                        <Link to="/Help"><a>Help</a></Link>
                        </li>
                    <li className="navbar-item">
                        <Link to="/Logout"><a>Logout</a></Link>
                        </li>
                </ul>

            </nav>
         
            
            </>
            
        );
    }
}

export default Navbar;



/*
import Home from './home';
import Book from './book';
import Courses from './learn';
import { BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Books</Link>
          </li>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
        </ul>
      </nav>
      </header>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/book' element={<Book/>}></Route>
      <Route path='/Courses' element={<Courses/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
*/