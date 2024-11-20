import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import SearchForm from './SearchForm';
import MapResults from './MapResults';
import ListResults from './ListResults';


export default function Torso (props) {
    return (
      <div className="torso">

        {props.viewDisplayed === "search-form" ?
            <SearchForm
            foodIcon = {props.foodIcon} setFoodIcon = {props.setFoodIcon}
            showerIcon = {props.showerIcon} setShowerIcon = {props.setShowerIcon}
            clothesIcon = {props.clothesIcon} setClothesIcon = {props.setClothesIcon}
            services = {props.services} setServices = {props.setServices}
            />
        : null }

        {props.viewDisplayed === "list-results" ?
            <ListResults
            foodIcon = {props.foodIcon} setFoodIcon = {props.setFoodIcon}
            showerIcon = {props.showerIcon} setShowerIcon = {props.setShowerIcon}
            clothesIcon = {props.clothesIcon} setClothesIcon = {props.setClothesIcon}
            services = {props.services} setServices = {props.setServices}
           />
        : null }

        {props.viewDisplayed === "map-results" ?
            <MapResults
            foodIcon = {props.foodIcon} setFoodIcon = {props.setFoodIcon}
            showerIcon = {props.showerIcon} setShowerIcon = {props.setShowerIcon}
            clothesIcon = {props.clothesIcon} setClothesIcon = {props.setClothesIcon}
            services = {props.services} setServices = {props.setServices}
            />
        : null }


      </div>
    )

  }

