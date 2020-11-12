import React from 'react'

function Card({item}) {
  return (
    <div className="card">
      <div className="card-content">
          <p className="title has-text-centered">{item.title}</p>
      </div>
      <footer className="card-footer">
          <a href="#" className="card-footer-item">Save</a>
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
      </footer>
    </div>
  )
}

export default Card;
