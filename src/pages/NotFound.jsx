
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#111] text-white">
      <h1 className="text-9xl font-bold text-[#B62025]">404</h1>
      <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-400 mt-2 text-center px-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-3 bg-[#B62025] hover:bg-[#8e191d] transition-colors rounded-lg font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;