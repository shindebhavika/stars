
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header h-32  border  w-[100%]  ">
      <header className="flex flex-wrap justify-between items-center py-3 mb-4 mt-3">
        <div className="flex-shrink-0 w-28 rounded-full ml-6 header-left">
          <Link to="/" className="flex items-center ">
            <img src="https://cdn.dribbble.com/users/4229785/screenshots/14072506/media/4fa4868265580c2792ef24887618511c.jpg" alt="Logo" className="w-full rounded-full" />
          </Link>
        </div>

        <div className="text-end space-x-3 mr-6">
          <button
            type="button"
            className="btn nav-links"
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </button>
         
        </div>
      </header>
    </div>
  );
}

export default Header;
