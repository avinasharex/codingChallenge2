class bookList {
    constructor(book) {
        this.book = book;
        // console.log(this.book);
    }

    filterBook(){
        let condition1 = this.book.filter(arr => arr.publicationYear < 2010)
        console.log(condition1);
        let condition2 = this.book.filter(arr => arr.publicationYear > 2010)
      let authors = condition2.map(book => book.author.toUpperCase());
      console.log(authors);
    }
}

let books = [
  { 
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925 
  },
  { 
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 2023 
  },
  { 
    title: 'Chetan Bhagat',
    author: 'George Orwell',
    publicationYear: 1949 
  }
];

let obj = new bookList(books)
obj.filterBook()