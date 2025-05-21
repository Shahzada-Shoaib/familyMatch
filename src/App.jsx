import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ProfileForm from './components/ProfileForm'
import SignupForm from './components/SignupForm';
import ApiTesting from './components/ApiTesting';
import ImageUploader from './components/ImageUploader';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<ProfileForm/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/testing" element={<ApiTesting />} />
        <Route path="/photo" element={<ImageUploader/>} />

      </Routes>
    </Router>
  )
}

export default App
