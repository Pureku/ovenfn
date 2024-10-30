// MachineChecker.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // ใช้ axios หรือ fetch เพื่อเรียก API

function MachineChecker() {
  const { machineName } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [machineStatus, setMachineStatus] = useState(null);

  useEffect(() => {
    const fetchMachineStatus = async () => {
      try {
        const response = await axios.get(
          `/api/machines/status?name=${machineName}`
        );
        const status = response.data.status;
        setMachineStatus(status);
        setIsLoading(false);

        if (status === "working") {
          navigate(`/page2/${machineName}`);
        } else {
          navigate(`/page1/${machineName}`);
        }
      } catch (error) {
        console.error("Error fetching machine status:", error);
      }
    };

    fetchMachineStatus();
  }, [machineName, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return null;
}

export default MachineChecker;
