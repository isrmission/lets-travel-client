import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import TourDetails from './Pages/TourDetails/TourDetails';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './Contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import Packages from './Pages/Packages/Packages';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/details/:id">
            <TourDetails></TourDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/add-service">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/manageOrders">
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="/packages">
            <Packages></Packages>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>


  );
}

export default App;
