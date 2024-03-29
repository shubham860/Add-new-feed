import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ post: { title, body, id }, onDelete }) => {
  return (
    <div style={ styles }>
      <h1 className='display-1'></h1>
      <h2>{ title }</h2>
      <p>{ body }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Remove Feeds
      </button>
    </div>
  );
};
