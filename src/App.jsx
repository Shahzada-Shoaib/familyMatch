import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ProfileForm from './components/ProfileForm'
import SignupForm from './components/SignupForm';
import ApiTesting from './components/ApiTesting';
import ImageUploader from './components/ImageUploader';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profileform" element={<ProfileForm/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/testing" element={<ApiTesting />} />
        <Route path="/photo" element={<ImageUploader/>} />
        <Route path="/profilepage" element={< ProfilePage/>} />


      </Routes>
    </Router>
  )
}

export default App
