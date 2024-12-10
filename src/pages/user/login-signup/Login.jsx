import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Logika login di sini (misalnya validasi input)
        // Set pesan jika login gagal
        setMsg('Fitur login belum diimplementasikan.');
    };

    return (
        <div className="login" id="login">
            <div className="parent-log">
                <img className="child-log" alt="Login Illustration" src="assets/img/logsign.png" />
                <form onSubmit={handleLogin}>
                   <p className="error-message">{msg}</p> 
                    <div className="input-log">
                        <div className="uname-log">Email atau Nama Pengguna</div>
                        <div className="wrapper-log">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan email atau nama pengguna"
                                className="input-field"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">Kata Sandi</div>
                        <div className="wrapper-log">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan kata sandi"
                                className="input-field"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="button-log">
                        <div className="button">Masuk</div>
                    </button>
                </form>

                <div className="account-check-log">
                    <div className="separator-log" />
                    <div className="or-log">atau</div>
                    <div className="separator-log" />
                </div>

                <div className="social-button-log">
                    <div className="flatColorIconsgoogleParent">
                        <FontAwesomeIcon icon={faGoogle} className="flatColorIconsgoogle" />
                        <div className="masukDenganGoogle">Masuk dengan Google</div>
                    </div>
                </div>

                <div className="account-check-log">
                    <div className="tidakPunyaAkun">Tidak punya akun?</div>
                    <Link to="/register" className="link-log">Buat akun</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;