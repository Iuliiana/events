import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/filter">Filterpage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/layouts">Layoutspage</a>
                </li>
            </ul>
            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}
export {Layout}