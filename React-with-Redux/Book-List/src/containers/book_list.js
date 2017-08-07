import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; //pass the action object to all reducers
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    //this.props is from the mapStateToProps function
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className='list-group-item'
            onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

//whatever is returned will show up as props inside of BookList
function mapStateToProps(state) {
  return {
    books: state.books
    //books is in the props, state.books is returned by reducers
  }
}

//anything returned from this function will be props in the container BookList
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
  //selectBook is in the props, the value selectBook is the action
  //this.selectBook will call the action selectBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
