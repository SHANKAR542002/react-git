import React from 'react';
import { BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';

import Header from './Header';
import Assignments from './Assignments.js';
import Calendar from './Calendar';
import Dashboard from './DashBoard1';
import Grades from './Grades';
import Help from './Help';
import Profile from './Profile';
import MyCourses from './MyCourse';
import Courses from './Courses';
import Logout from './Logout';
class App extends React.Component {
    render() {
        return (
            <>
            <head> 
            <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Audiowide"></link>
            </head>
            <div className="app">
                <Header />
                
                <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/DashBoard1' element={<Dashboard/>}></Route>
            <Route path='/MyCourse' element={<MyCourses />}></Route>
            <Route path='/Courses' element={<Courses />}></Route>
            <Route path='/Assignments' element={<Assignments/>}></Route>
            <Route path='/Help' element={<Help />}></Route>
            <Route path='/Logout' element={<Logout />}></Route>
            <Route path='/Grades' element={<Grades/>}></Route>
            <Route path='/Calendar' element={<Calendar />}></Route>
            <Route path='/Profile' element={<Profile />}></Route>
            </Routes>
            </div>
            </>
            
        );
    }
}

export default App;



