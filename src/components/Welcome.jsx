import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const WelcomeMessage = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    };

    const handleWelcomeClick = () => {
        toast.info(`${userName}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate("/blogs");
    };

    return (
        <div className="container-fluid welcome-container d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1>Welcome to My Blog App</h1>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <div className="mt-4">
                    <p>Please enter your name:</p>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            onChange={handleInputChange}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={handleWelcomeClick}>
                                Welcome
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeMessage;
