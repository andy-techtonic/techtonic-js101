function Book(title, author, pages, yearPublished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.PublishDate = new Date(yearPublished, 0,1);
};

var library = {
  books: [
    new Book (
      'Eloquent Javascript',
      'Marjin Haverbeke',
      300,
      2013
    ),
    new Book (
      'JavaScript & jQuery',
      'Jon Duckett',
      348,
      2014
    ),
    new Book (
      'JavaScript the Good Parts',
      'Douglas Crockford',
      168,
      2009
    ),
    new Book (
      "Don't Make Me Think",
      "Steve Krug",
      216,
      2000
    )
  ],

  validate: function(anArray) {
    for (var i = 0; i < anArray.length; i++) {
      if(anArray[i] === null || anArray[i] === "" ) {
        return false;
      } else if ( typeof(anArray[i]) === 'number' || anArray[i].length > 4 ) {
        return false;
      } else {
        return true;
      }
    }
  },

  addBook: function(title, author, pages, yearPublished) {
    var anArray = [];
    anArray.push(title, author, pages, yearPublished);
    if(this.validate(anArray) === false) {
      console.log('Please enter valid inputs')
      return false;
    }
    for (var i = 0; i < this.books.length; i++) {
      if (this.books[i].title.toLowerCase() === title.toLowerCase()) {
        console.log("Library already contains that title")
        return false;
      }
    }
    this.books.push(
      new Book(title, author, pages, yearPublished)
    )
      return true;
  },

  removeBookByTitle: function(title) {
    var anArray = [];
    anArray.push(title, author, pages, yearPublished);
    if(this.validate(anArray) === false) {
      console.log('Please enter valid inputs')
      return false;
    }
    for (var i = 0; i < this.books.length; i++) {
      if(this.books[i].title.toLowerCase() === title.toLowerCase()) {
        this.books.splice(i, 1);
        console.log(title, 'removed from library');
        return true;
      }
    }
    console.log('Title not found');
    return false;
  },

  removeBooksByAuthor: function(author) {
    var anArray = [];
    anArray.push(title, author, pages, yearPublished);
    if(this.validate(anArray) === false) {
      console.log('Please enter valid inputs')
      return false;
    }
    var libraryInitialLength = this.books.length;
    for (var i = 0; i < this.books.length; i++) {
      if(this.books[i].author.toLowerCase() === author.toLowerCase()) {
        this.books.splice(i, 1);
        console.log('Books by', author, 'removed from library');
      }
    }
    if(this.books.length < libraryInitialLength) {
      return true;
    } else
      console.log('Author not found')
      return false;
  },

  getRandomBook: function() {
    var match = 0;
    if(this.books.length === 0) {
      console.log(null, '...There aren\'t any books')
    } else {
      var random = Math.floor(Math.random() * this.books.length);
      console.log("Here's a random book...", this.books[random]);
    }
    return true;
  },

  getBookByTitle: function(title) {
    var anArray = [];
    anArray.push(title, author, pages, yearPublished);
    if(this.validate(anArray) === false) {
      console.log('Please enter valid inputs')
      return false;
    }
    var titleWords = title.toLowerCase().split(' ');
    var match = [];
    for (var i = 0; i < titleWords.length; i++) {
      for (var j = 0; j < this.books.length; j++) {
        if( this.books[j].title.toLowerCase().includes(titleWords[i]) ) {
          match.push(this.books[j]);
        }
      }
    }
    console.log('Here are the books with titles that match any words in your search: ', match);
    return true
  },

  getBooksByAuthor: function (authorName) {
    var anArray = [];
    anArray.push(title, author, pages, yearPublished);
    if(this.validate(anArray) === false) {
      console.log('Please enter valid inputs')
      return false;
    }
    var authorNameComponents = authorName.toLowerCase().split(' ')
    var match = [];
    for (var i = 0; i < authorNameComponents.length; i++) {
      for (var j = 0; j < this.books.length; j++) {
        if( this.books[j].author.toLowerCase().includes(authorNameComponents[i]) ) {
          match.push(this.books[j]);
        }
      }
    }
    console.log('Here are the books with authors that match any words in your search: ', match);
    return true
  },

  addBooks: function(arrayOfBooks) {
    if(this.validate(arrayOfBooks) === false) {
      console.log('Please enter valid inputs')
      return false;
    }
    var numBooksAdded = 0;
    for (var i = 0; i < arrayOfBooks.length; i++) {
      this.books.push(arrayOfBooks[i])
      numBooksAdded +=1;
    }
    console.log(numBooksAdded, 'books added');
    return true;
  },

  getAuthors: function() {
    var authors =[];
    for (var i = 0; i < this.books.length; i++) {
      if(!authors.includes(this.books[i].author)) {
        authors.push(this.books[i].author)
      }
    }
    console.log('authors',authors);
    return true;
  },

  getRandomAuthorName: function() {
    var match = 0;
    if(this.books.length === 0) {
      console.log(null, ' No books in library')
    } else {
      var random = Math.floor(Math.random() * this.books.length);
      console.log(this.books[random].author);
    }
      return true;
    }
}
