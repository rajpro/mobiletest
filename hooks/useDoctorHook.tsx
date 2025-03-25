import { useState } from "react";
import { getDoctors } from "@/apis/doctor";
import { DoctorModel } from "@/models/doctorModel";

const useDoctorHook = () => {
  const [doctors, setDoctors] = useState<DoctorModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDoctors = async () => {
    try {
      const result = await getDoctors();
      setDoctors(result);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateDoctors = (newDoctors: DoctorModel[]) => {
    setDoctors(newDoctors);
  };

  return { doctors, loading, updateDoctors, fetchDoctors };
};

export default useDoctorHook;
