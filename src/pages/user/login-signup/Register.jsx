import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleRegister = (e) => { 
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            setMsg("Semua field harus diisi!");
            return;
        }

        if (password !== confirmPassword) {
            setMsg("Kata sandi dan konfirmasi kata sandi tidak cocok!");
            return;
        }
        setMsg('Fitur pendaftaran belum diimplementasikan.');
    };

    return (
        <div className="login" id="register">
            <div className="parent-log">
                <img className="child-log" alt="Logo" src="assets/img/logsign.png" />
                <div className="error-message" style={{ color: 'red' }}>{msg}</div>
                <form onSubmit={handleRegister}>
                    <div className="input-log">
                        <div className="uname-log">Nama Lengkap</div>
                        <div className="wrapper-log">
                            <input 
                                type="text" 
                                placeholder="Masukkan nama lengkap" 
                                className="input-field" 
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">Email</div>
                        <div className="wrapper-log">
                            <input 
                                type="email" 
                                placeholder="Masukkan email" 
                                className="input-field" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">Kata Sandi</div>
                        <div className="wrapper-log">
                            <input 
                                type="password" 
                                placeholder="Masukkan kata sandi" 
                                className="input-field" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">Konfirmasi Kata Sandi</div>
                        <div className="wrapper-log">
                            <input 
                                type="password" 
                                placeholder="Masukkan konfirmasi kata sandi" 
                                className="input-field" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="button-log">
                        <button type="submit" className="button">
                            Daftar
                        </button>
                    </div>
                </form>

                <div className="account-check-log">
                    <div className="tidakPunyaAkun">Punya akun?</div>
                    <Link to="/login" className="link-log">
                        Masuk
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;