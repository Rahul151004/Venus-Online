import { Outlet } from "react-router-dom";
import bannerImage from "../../assets/auth-banner.jpg";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-cover bg-center w-1/2 px-12 relative"
      style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="max-w-md space-y-6 text-center text-white relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Venus Online
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
