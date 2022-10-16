import React from "react";

//importing book items
import { BookItems } from "./bookItems";

export class Books extends React.Component {
    render() {

        //taking an array and splitting it
        return this.props.books.map(
            //excuting this on each element
            (book) => {
                return <BookItems book={book} key={book.isbn}></BookItems>
            }
        );
    }
}
