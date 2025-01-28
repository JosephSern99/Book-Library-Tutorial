import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";

const BookCard = ({
  id,
  title,
  author,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = false,
}: Book) => (
  <li>
    <Link href={`/books/${id}`}>
      <BookCover coverColor={coverColor} coverImage={coverUrl} />
    </Link>
  </li>
);
export default BookCard;
