import React from 'react';

function Books(props) {
  console.log(props, "thrr");
  const { books } = props;
  return (
    <div>
      <div>Books</div>
      {books !== "" && (
        books.map((data) => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Books;
