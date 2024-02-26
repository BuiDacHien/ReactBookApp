import BookModel from "../../../models/BookModel";

export const ReturnBook: React.FC<{ book: BookModel }> = ({ book }) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        {book.img ? (
          <img src={book.img} width="150" height="230" alt="book" />
        ) : (
          <img
            src={require("./../../../Images/BooksImages/new-book-1.png")}
            width="151"
            height="233"
            alt="book"
          />
        )}
        <h6 className="mt-2">{book.title}</h6>
        <p>{book.author}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
