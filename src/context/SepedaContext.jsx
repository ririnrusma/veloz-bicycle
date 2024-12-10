import React, { createContext, useContext, useState } from "react";

// Membuat Context untuk Sepeda
const SepedaContext = createContext();

// Provider untuk memberikan data sepeda ke aplikasi
export const SepedaProvider = ({ children }) => {
  const [sepedaList, setSepedaList] = useState([]);

  // Fungsi untuk menambah sepeda
  const addSepeda = (sepeda) => {
    setSepedaList([...sepedaList, { id: sepedaList.length + 1, ...sepeda }]);
  };

  // Fungsi untuk mengupdate sepeda
  const updateSepeda = (id, updatedSepeda) => {
    setSepedaList(sepedaList.map((sepeda) => (sepeda.id === id ? { ...sepeda, ...updatedSepeda } : sepeda)));
  };

  // Fungsi untuk menghapus sepeda
  const removeSepeda = (id) => {
    setSepedaList(sepedaList.filter((sepeda) => sepeda.id !== id));
  };

  return <SepedaContext.Provider value={{ sepedaList, addSepeda, updateSepeda, removeSepeda }}>{children}</SepedaContext.Provider>;
};

// Hook untuk mengakses context
export const useSepedaContext = () => {
  return useContext(SepedaContext);
};