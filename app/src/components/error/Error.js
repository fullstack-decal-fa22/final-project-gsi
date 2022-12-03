//404 not found and other default errors page

import { useRouteError } from "react-router-dom";
import Navbar from "../shared/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <Navbar></Navbar>
      <div className="error-container">
        <h1 className="error-header">Oops!</h1>
        <p className="error-message">An error has occured.</p>
        <p className="error-message">You did this, didn't you.</p>
        <p className="error-message">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
