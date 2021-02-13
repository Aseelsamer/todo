import React, { useState, useContext, useEffect } from 'react';
import { Card, Badge } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { SettingsContext } from '../components/context/settings';


class TodoList extends React.Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        data: [],
        perPage: 10,
        currentPage: 0
    };
    this.handlePageClick = this
        .handlePageClick
        .bind(this);
}
receivedData() {
    const list=this.props.list;
    let slice = list.slice(this.state.offset, this.state.offset + this.context.notePerPage)
    let newCount = Math.ceil(list.length / this.context.notePerPag);

            this.setState({
                pageCount: newCount,
              data:slice
            })
     
}
handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.context.notePerPag;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};

setVariation = (complete) => {
       return complete ? 'danger' : 'success';
     };

handleValue = (complete) => {
       return complete ? 'Complete' : 'Pending';
    };

componentDidMount() {
    this.receivedData()
}

  render() {
    return (
          <>
            {this.state.data.map((item) => (
              <Card key={item._id}>
                <Card.Header as="h5">
                  <Badge
                    className="badge-padding"
                    pill
                    onClick={() => this.props.handleComplete(item._id)}
                    variant={this.setVariation(item.complete)}
                  >
                    {this.handleValue(item.complete)}{' '}
                  </Badge>
                  {item.assignee}
                  <span
                    onClick={() => this.props.handleDelete(item._id)}
                    className="delete-btn"
                    variant="outline-secondary"
                  >
      
                  </span>{' '}
                  <button onClick={() => this.props.handleDelete(item._id)}> X</button>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{item.text}</Card.Title>
                  <Card.Text className="right-text">
                    Difficulty: {item.difficulty}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
      
            <section>
              <div>
                {/* {this.state.postData} */}
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.state.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"} />
              </div>
            </section>
          </>
        );
      }
      
      
}

export default TodoList;
