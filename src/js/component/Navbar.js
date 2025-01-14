import React, { useContext } from "react";
import { Icon } from "../../assets/Icon";
import { FavoritesList } from "./FavoritesList";
import { Context } from "../store/appContext";
import { SavedList } from "./SavedList";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-dark text-light fw-bold">
        <div className= "container-fluid">
                <Link
                to={"/"}
                relative="route"
                className="navbar-brand text-decoration-none"
                >
                <Icon/>
                <span className="ms-5 text-warning display-5">Star Wars</span>
                </Link>
            <div className="d-flex">
                <div className="dropdown">
                    <button
                     className="btn btn-dark dropdown-toggle text-warning"
                     type="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                    >
                    <span className="badge rounded-pill text-warning">
                    {store.favorites.length}
                    </span>
                    Favorites
                    </button>
            <FavoritesList />
          </div>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle text-warning"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="badge rounded-pill text-warning">{store.saved.length}</span>
              Saved
            </button>
            <SavedList />
          </div>
        </div>
      </div>
    </nav>
  );
};
