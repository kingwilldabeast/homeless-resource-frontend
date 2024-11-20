import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Torso from './components/Torso'


export default function App() {
      


  const [viewDisplayed, setViewDisplayed] = useState("search-form");
  const [foodIcon, setFoodIcon] = useState(false)
  const [showerIcon, setShowerIcon] = useState(false)
  const [clothesIcon, setClothesIcon] = useState(false)

  const [services, setServices] = useState({
    meals: {selected: false, nickname: "meals"},
    clothes: {selected: false, nickname: "clothes"},
    medicene: {selected: false, nickname: "meds"},
    pantry: {selected: false, nickname: "pantries"},
    roof_daytime: {selected: false, nickname: "roof-daytime"},
    roof_nighttime: {selected: false, nickname: "roof-overnight"},
    health: {selected: false, nickname: "health"},
    finances: {selected: false, nickname: "finances"},
    showers: {selected: false, nickname: "showers"},
    supplies: {selected: false, nickname: "supplies"},
    activites: {selected: false, nickname: "activites"},
  });

  // const [selectedMic, setSelectedMic] = useState("")

  return (
    <div className='app'>
    <Header />
    <Nav viewDisplayed={viewDisplayed} setViewDisplayed ={setViewDisplayed} />
    <Torso 
    viewDisplayed={viewDisplayed} setViewDisplayed ={setViewDisplayed} 
    foodIcon = {foodIcon} setFoodIcon = {setFoodIcon}
    showerIcon = {showerIcon} setShowerIcon = {setShowerIcon}
    clothesIcon = {clothesIcon} setClothesIcon = {setClothesIcon}
    services = {services} setServices = {setServices}
    />
    </div>
  )
}

