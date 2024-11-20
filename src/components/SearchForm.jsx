import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function SearchForm (props) {

      // Function to toggle a specific service
        const toggleService = (serviceKey) => {
            props.setServices((prevServices) => ({
            ...prevServices,
            [serviceKey]: {
                ...prevServices[serviceKey],
                selected: !prevServices[serviceKey].selected, // Toggle 'selected'
            },
            }));
        };

    return (
      <div className="search-form">
        Search fields and button
        <div className="icon-list">
                    

            {Object.keys(props.services).map((serviceKey) => (
                <div
                key={serviceKey}
                onClick={() => toggleService(serviceKey)}
                className={props.services[serviceKey].selected ? "icon icon-selected" : "icon "}
                >
                {props.services[serviceKey].nickname} ({props.services[serviceKey].selected ? 'On' : 'Off'})
                </div>
            ))}

        </div>
      </div>
    )

  }

