import React from 'react';

const Navbar = ({ setCategory, setSearch }) => {
    const startSearch = (e) => {
        e.preventDefault();
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className='badge bg-light text-dark fs-4'>AbhiTak</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("technology")} style={{ cursor: 'pointer' }}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("business")} style={{ cursor: 'pointer' }}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("health")} style={{ cursor: 'pointer' }}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("sports")} style={{ cursor: 'pointer' }}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("entertainment")} style={{ cursor: 'pointer' }}>Entertainment</div>
                        </li>
                    </ul>
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit" onClick={startSearch}>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
