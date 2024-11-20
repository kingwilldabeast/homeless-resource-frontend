import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function Nav (props) {

    const toggleView = (choice) => {
        props.setViewDisplayed(choice);  
      };

    return (
      <div className="nav">
        <div className="nav-button" onClick={() => toggleView("search-form")}>Search</div>
        <div className="nav-button" onClick={() => toggleView("list-results")}>List</div>
        <div className="nav-button" onClick={() => toggleView("map-results")}>Map</div>
      </div>
    )

  }

