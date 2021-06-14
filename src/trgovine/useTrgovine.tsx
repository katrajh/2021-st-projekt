import axios from "axios";
import { useEffect, useState } from "react";

// const apiUrl = process.env.NODE_ENV === "production" ? "http://192.168.?.?:8080" : "http://localhost:8080";
const apiUrl = "http://localhost:8080";

export interface ITrgovina {
  id: number;
  naziv: string;
  naslov: string;
  drzava: string;
  regija: string;
  delovniCas: string;
}

export const useTrgovine = () => {

  const [trgovine, setTrgovine] = useState<ITrgovina[]>([]);
  

  const getTrgovine = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/trgovina`);
      setTrgovine(data);
    } catch (error) {
      console.log(error);
    }
  }

  // anonimna funkcija
  useEffect(() => {
    getTrgovine();
  }, []);

  const postTrgovina = async (trgovina: ITrgovina) => {
    try {
      await axios.post(`${apiUrl}/trgovina`, trgovina);
      // const { data }= await axios.post(`${apiUrl}/trgovina`, trgovina);
      // setTrgovine(prev => [...prev, data]);

      getTrgovine();

      // window.location.href = `/trgovina`;   // da se osveži stran
    } catch (error) {
      console.log(error);
    }
  }

  const updateTrgovina = async (trgovina: ITrgovina) => {
    try {
      const { data } = await axios.put(`${apiUrl}/trgovina/${trgovina.id}`, trgovina);
      window.location.href = `/trgovina/${data.id}`;
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTrgovina = async (trgovina: ITrgovina) => {
    try {
      await axios.delete(`${apiUrl}/trgovina/${trgovina.id}`);
      // window.location.href = `/trgovina`;
      getTrgovine();
    } catch (error) {
      console.log(error);
    }
  }

  return { trgovine, postTrgovina, updateTrgovina, deleteTrgovina };
}