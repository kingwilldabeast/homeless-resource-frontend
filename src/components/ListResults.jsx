import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import {apiKey, sheetID} from './globals'



export default function ListResults (props) {
    const range = "Sheet1!A1:O20"

    const [venueArray, setVenues] = useState([])

    useEffect(() => {
        getData()
    }, [])

  const getData = async () => {
    try {
      const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`);
      
      if (response.status === 200) {
        const rows = response.data.values;
  
        // Extract headers (first row)
        const headers = rows[0];
  
        // Map over the remaining rows to create objects
        const dataArray = rows.slice(1).map(row => {
          let obj = {};
          row.forEach((value, index) => {
            obj[headers[index]] = value;
          });
          return obj;
        });
  
        // Set the processed data as state
        setVenues(dataArray);
      } else {
        console.error('Failed to fetch data', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    return (
    <div className="list-results">
        list of shelters go here

        <div className='venue-list'>

        {venueArray
            .filter((item) => {
                // Get all selected service nicknames
                const selectedNicknames = Object.values(props.services)
                .filter(service => service.selected)
                .map(service => service.nickname);

                // Check if any selected nickname is included in the item's category
                return selectedNicknames.some(nickname => item.category.includes(nickname));
            })
            .map((item, index) => (
                <div key={index} className="venue-card">
                <p><strong>Name:</strong> {item.program_or_facility}</p>
                <p><strong>Services Offered:</strong> {item.category}</p>
                <p><strong>Address:</strong> 
                    <a className='link-color-override' 
                    href={`http://maps.apple.com/?q=${encodeURIComponent(item.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    {item.address}
                    </a>
                </p>
                </div>
            ))}
            
        </div>

    </div>
    )





  }


