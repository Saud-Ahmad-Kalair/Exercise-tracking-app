import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Article from './Components/Article/Article';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/login/Login';
import './App.css';
import Header from './Components/Navbar/Header';
import About from './Components/About/About';
import Activities from './Components/My Activities/Activities';
import { createContext, useState, useEffect } from 'react';
import Signup from './Components/login/Signup';
import Protected from './Components/Protected';



export const Global = createContext()
function App() {
  const [isloggedin, setIsLoggedIn] = useState([])
  const [data, setData] = useState([]);
  const [isinput, setIsInput] = useState(false)
  const [isupdate, setIsUpdate] = useState(true)
  const [islogin, setIsLogin] = useState(false)

  const [inputHandle, setInputHandle] = useState('')
  const empty = {
    name: '',
    description: '',
    type: '',
    date: '',
    duration: ''
  }
  async function fetchapi() {

    if (isloggedin) {

      let api = await fetch('http://localhost:4000/getdata', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(isloggedin)
      })
      api = await api.json()
      setData(api)

    }

  }




  const handleInput = (e) => {
    const { name, value } = e.target
    setInputHandle({ ...inputHandle, [name]: value })
  }


  const submitForm = async () => {
    const newdata = { ...inputHandle, user: isloggedin._id };

    // const newdata = { ...inputHandle, user: isloggedin._id };
    await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newdata),
    })
    setInputHandle(empty)
    setIsInput(false);
    fetchapi()
  }

  // new activity button
  const newactivity = () => {
    setIsInput(true)
  }
  // cancel activity

  const cancelActivity = () => {
    setIsInput(false)
  }

  // Delete Activity
  const deleteActivity = async (id) => {
    await fetch(`http://localhost:4000/${id}`, {
      method: 'DELETE',
    })
    console.log("fetch kr")
    await fetchapi();
  }







  const [login, setlogin] = useState([])
  const loginHandle = (e) => {
    let { name, value } = e.target
    setlogin({ ...login, [name]: value })
  }


  //login Functionality



  const loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(login)
    })
    if (response.status == 200) {
      response = await response.json();
      setIsLoggedIn(response)
      console.log(response)
      setIsLogin(true)
    }
    else {
      alert("Incorrect")
    }


  }

  useEffect(() => {
    fetchapi()
  }, [isloggedin])

  // logout
  const Logout = () => {
    setIsLogin(false)
  }

  return (
    <div>
      <Global.Provider value={{
        Logout: Logout, loginHandle: loginHandle,
        loginUser: loginUser, islogin: islogin,
        deleteActivity: deleteActivity, cancelActivity: cancelActivity,
        isinput: isinput, newactivity: newactivity, data: data,
        inputHandle: inputHandle, handleInput: handleInput, submitForm: submitForm
      }}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/article' element={<Article />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/myactivity' element={<Protected Component={Activities} />} />

          </Routes>
          <Footer />
        </Router>
      </Global.Provider>
    </div>
  );
}

export default App;
