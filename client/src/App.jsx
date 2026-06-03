import { Routes, Route } from 'react-router-dom'
import LoginLanding from './pages/LoginLanding'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import Payslips from './pages/Payslips'
import Settings from './pages/Settings'
import PrintPayslip from './pages/PrintPayslip'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginLanding />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route
          path="/print-payslip/:id"
          element={<PrintPayslip />}
        />
      </Routes>
    </AuthProvider>
  )
}

export default App