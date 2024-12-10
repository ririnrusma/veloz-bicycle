import React, { useState } from "react";
import { useSepedaContext } from "../context/SepedaContext"; // Import context

const TambahSepeda = () => {
  const { addSepeda } = useSepedaContext(); // Ambil fungsi addSepeda dari context
  const [formData, setFormData] = useState({
    namaSepeda: "",
    merek: "",
    jumlah: "",
  });

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();
    addSepeda(formData); // Menambahkan sepeda ke context
    alert("Data berhasil disimpan!");
    setFormData({ namaSepeda: "", merek: "", jumlah: "" }); // Reset form setelah submit
  };

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Tambah Jenis Sepeda</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="namaSepeda" placeholder="Nama Sepeda Listrik" onChange={handleChange} value={formData.namaSepeda} style={styles.input} />
        <input type="text" name="merek" placeholder="Merek" onChange={handleChange} value={formData.merek} style={styles.input} />
        <input type="text" name="jumlah" placeholder="Jumlah" onChange={handleChange} value={formData.jumlah} style={styles.input} />
        <button type="submit" style={styles.saveButton}>
          Simpan
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginLeft: "200px",
    padding: "20px",
    backgroundColor: "#fcefe3",
    minHeight: "100vh",
  },
  input: {
    display: "block",
    marginBottom: "10px",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  saveButton: {
    backgroundColor: "#ff3b30",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default TambahSepeda;