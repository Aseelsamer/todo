import React, { useState, useContext, useEffect } from 'react';
import { Card, Badge } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { ThemesContext } from '../components/context/themeContext';

// function TodoList(props) {
//   const [offset, setoffset] = useState(0);
//   const [data, setData] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [currentPage, setCurrent] = useState(1);
//   const context = useContext(ThemesContext);
//     console.log(context.notePerPage)

//   const receivedData = () => {
//     const list = props.list;
//     let slice = list.slice(offset, offset + context.notePerPage)
//     let newCount = Math.ceil(list.length / context.notePerPage)
//     setPageCount(newCount);
//     setData(slice);

//   }
//   const handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const newoffset = selectedPage * context.notePerPage;
//     setCurrent(selectedPage);
//     setoffset(newoffset);
//     receivedData();
//   }
//   const setVariation = (complete) => {
//     console.log(complete);
//     return complete ? 'danger' : 'success';
//   };
//   const handleValue = (complete) => {
//     return complete ? 'Complete' : 'Pending';
//   };
  
//   // useEffect(()=> { return receivedData()},[]);

//      return (
//     <>
//       {data.map((item) => (
//         <Card key={item._id}>
//           <Card.Header as="h5">
//             <Badge
//               className="badge-padding"
//               pill
//               onClick={() => props.handleComplete(item._id)}
//               variant={setVariation(item.complete)}
//             >
//               {handleValue(item.complete)}{' '}
//             </Badge>
//             {item.assignee}
//             <span
//               onClick={() => props.handleDelete(item._id)}
//               className="delete-btn"
//               variant="outline-secondary"
//             >

//             </span>{' '}
//             <button onClick={() => props.handleDelete(item._id)}> X</button>
//           </Card.Header>
//           <Card.Body>
//             <Card.Title>{item.text}</Card.Title>
//             <Card.Text className="right-text">
//               Difficulty: {item.difficulty}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}

//       <section>
//         <div>
//           {/* {this.state.postData} */}
//           <ReactPaginate
//             previousLabel={"prev"}
//             nextLabel={"next"}
//             breakLabel={"..."}
//             breakClassName={"break-me"}
//             pageCount={pageCount}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={handlePageClick}
//             containerClassName={"pagination"}
//             subContainerClassName={"pages pagination"}
//             activeClassName={"active"} />
//         </div>
//       </section>
//     </>
//   );
// }


      
 

// export default TodoList;


class TodoList extends React.Component {
  static contextType = ThemesContext;

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
