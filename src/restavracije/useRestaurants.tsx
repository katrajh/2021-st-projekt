import axios from "axios";
import { useEffect, useState } from "react";

// const apiUrl = process.env.NODE_ENV === "production" ? "http://192.168.?.?:8080" : "http://localhost:8080";
const apiUrl = "http://localhost:8080";

export interface IRestaurant {
  id: number;
  naziv: string;
  naslov: string;
  drzava: string;
  regija: string;
}

export const useRestaurant = () => {

  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  

  const getRestaurants = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/restavracija`);
      setRestaurants(data);
    } catch (error) {
      console.log(error);
    }
  }

  // anonimna funkcija
  useEffect(() => {
    getRestaurants();
  }, []);

  const postRestaurant = async (restaurant: IRestaurant) => {
    try {
      await axios.post(`${apiUrl}/restavracija`, restaurant);
      // const { data }= await axios.post(`${apiUrl}/restavracija`, restaurant);
      // setRestaurants(prev => [...prev, data]);

      getRestaurants();

      // window.location.href = `/restavracije`;   // da se osveži stran
    } catch (error) {
      console.log(error);
    }
  }

  const updateRestaurant = async (restaurant: IRestaurant) => {
    try {
      const { data } = await axios.put(`${apiUrl}/restavracija/${restaurant.id}`, restaurant);
      window.location.href = `/restavracije/${data.id}`;
    } catch (error) {
      console.log(error);
    }
  }

  const deleteRestaurant = async (restaurant: IRestaurant) => {
    try {
      await axios.delete(`${apiUrl}/restavracija/${restaurant.id}`);
      // window.location.href = `/restavracije`;
      getRestaurants();
    } catch (error) {
      console.log(error);
    }
  }

  return { restaurants, postRestaurant, updateRestaurant, deleteRestaurant };
}