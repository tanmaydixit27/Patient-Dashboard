import { useState, useEffect } from "react";
import { fetchPatients } from "../services/api";

const useFetchPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatients().then((data) => {
      setPatients(data);
      setLoading(false);
    });
  }, []);

  return { patients, loading };
};

export default useFetchPatients;
