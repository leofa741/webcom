
import { Route, Routes ,Navigate} from 'react-router-dom';
import {HomePage} from '../pages/HomePage'
import {ServicesPage} from '../pages/ServicesPage'
import {AboutPage} from '../pages/AboutPage'

export const ContentRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/" />} />

    </Routes>

  )
}
