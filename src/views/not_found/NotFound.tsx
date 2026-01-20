import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-muted-foreground text-xl py-5">Page not found</p>
      <Link
        className="text-primary-foreground rounded-full text-xl px-5 py-2 bg-primary flex items-center justify-center gap-2"
        to="/"
      >
        <ArrowLeft size={25} /> Go back to home
      </Link>
    </div>
  );
}

export default NotFound;
