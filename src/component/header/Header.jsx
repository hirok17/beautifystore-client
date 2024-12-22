import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useAuth();


  const handelLogOut=()=>{
   logOut()
   .then(()=>{
     toast.success('Log Out success');
   })
   .catch(error=>{
     console.log(error);
   })
  }
  const link=<>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/products'>Products</NavLink></li>
      <li><NavLink to='/about-us'>About us</NavLink></li>
      <li><NavLink to='/contact-us'>Contact us</NavLink></li>
  </>
  return (
    <section className="bg-slate-100 shadow">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {link}
            </ul>
          </div>
          <Link to='/'><p className="text-2xl lg:text-4xl font-bold font-mono text-center">Beautify<span className="text-orange-500">Store</span></p></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    {
            user ? <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-[#F85606] text-white rounded-md hover:bg-orange-500 transition m-1">My Account</div>
              
                <div
                tabIndex={0}
                className="dropdown-content bg-primary rounded-md text-primary-content z-[10] shadow w-[250px]">
                <div className="p-3 ml-3">
                  <h3 className="card-title">Kamlesh Roy</h3>
                  <Link to='/dashboard'> <h3 className="card-title mt-2 cursor-pointer">Dashboard</h3></Link>
                  <button onClick={handelLogOut} className="btn mt-3">Log Out</button>
                
                </div>
              </div>
              </div>
            </>
            :
            <div>
            <Link to='/register'>
              <button className="ml-2 px-4 py-2 bg-[#F85606] text-white rounded-md hover:bg-orange-500 transition">
                Sign Up
              </button>
            </Link>

          </div>

            }
        </div>
      </div>
    </section>
  );
};

export default Header;
