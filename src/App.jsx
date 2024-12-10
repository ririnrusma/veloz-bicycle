import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Admin 
import { SepedaProvider } from "./context/SepedaContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import JenisSepeda from "./pages/JenisSepeda";
import Transaksi from "./pages/Transaksi";
import Pengguna from "./pages/pengguna";
import Loginadmin from "./pages/Loginadmin";
import TambahSepeda from "./pages/TambahSepeda";
import EditSepeda from "./pages/EditSepeda";

// Import User 
import Login from "./pages/user/login-signup/Login";
import Lokasi from "./pages/user/Lokasi/Lokasi";
import AkunProfil from "./pages/user/Profil/AkunProfil";
import DaftarSepeda from "./pages/user/Daftar Sepeda/DaftarSepeda";
import Rental from "./pages/user/Rental/Rental";
import Sewa from "./pages/user/Rental/Sewa";
import RentalAcc from "./pages/user/Rental/RentalAcc";
import Beranda from "./pages/user/Beranda/Beranda";
import Kontak from "./pages/user/Kontak kami/Kontak";
import TransaksiUser  from "./pages/user/Rental/Transaksi";
import Register from "./pages/user/login-signup/Register";
import Konfirmasi from "./pages/user/Kontak kami/Konfirmasi";
import Navbar from "./component/user/navbar/Navbar";
import Footer from "./component/user/footer/Footer";
import Pembayaran from "./pages/user/Rental/Pembayaran";

const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const DashboardLayout = ({ children }) => {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, marginTop: "70px" }}>
          <Header />
          {children}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* Halaman Admin */}
        <Route path="/" element={<Loginadmin />} />
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/jenis-sepeda" element={<DashboardLayout><JenisSepeda /></DashboardLayout>} />
        <Route path="/transaksi" element={<DashboardLayout><Transaksi /></DashboardLayout>} />
        <Route path="/pengguna" element={<DashboardLayout><Pengguna /></DashboardLayout>} />
        <Route path="/TambahSepeda" element={<DashboardLayout><TambahSepeda /></DashboardLayout>} />
        <Route path="/EditSepeda/:id" element={<DashboardLayout><EditSepeda /></DashboardLayout>} />

        {/* Halaman User */}
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/daftarsepeda" element={<DaftarSepeda />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/sewa" element={<Sewa />} />
        <Route path="/rentalacc" element={<RentalAcc />} />
        <Route path="/transaksi" element={<TransaksiUser  />} />
        <Route path="/kontakkami" element={<Kontak />} />
        <Route path="/konfirmasi" element={<Konfirmasi />} />
        <Route path="/profil" element={<AkunProfil />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <SepedaProvider>
        <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </SepedaProvider>
    </Router>
  );
};

export default App;