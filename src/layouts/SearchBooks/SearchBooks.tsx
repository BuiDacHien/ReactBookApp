import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";

export const SearchBooks = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const bookData = async () => {
      const baseUrl: string = "http://localhost:8080/api/v1/books";

      const url: string = `${baseUrl}?page=0&size=9`;

      const res = await fetch(url);

      console.log("res is: ", res);

      if (!res.ok) {
        throw new Error("Some thing happen wrong !");
      }

      const resJson: any = await res.json();

      console.log("res json is: ", resJson);

      const resData = resJson._embedded.books;

      console.log("res data is: ", resData);

      const loadedBooks: BookModel[] = [];

      for (const key in resData) {
        console.log("key is is: ", key);

        loadedBooks.push({
          id: resData[key].id,
          title: resData[key].title,
          author: resData[key].author,
          description: resData[key].description,
          copies: resData[key].copies,
          copiesAvailable: resData[key].copiesAvailable,
          category: resData[key].category,
          img: resData[key].img,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };

    bookData().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-6">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-labelledby="Search"
                />
                <button className="btn btn-outline-success">Search</button>
              </div>
            </div>
            <div className="col-4">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Front End
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Back End
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DevOps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
