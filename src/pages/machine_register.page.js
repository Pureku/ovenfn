import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ovenImg from "../assets/images/oven_img.png";
import { useParams } from "react-router-dom";
import Modal from "../components/modal.component";

function MachineReg() {
  const [lotData, setLotdata] = useState();
  const [partname, setPartname] = useState();
  const [empCode, setEmpCode] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { machineName } = useParams(); // ดึงค่าจาก URL

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thankyou"); // นำทางไปยังหน้าที่ต้องการหลังจากส่งฟอร์ม
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 mb-5">
          <label className="text-lg font-medium text-gray-900 dark:text-white">
            MACHINE NAME : {machineName}
          </label>
        </div>
        <div className="mt-5 mb-10">
          <img src={ovenImg} alt="oven" style={{ width: 144, height: 145 }} />
        </div>
      </div>
      <div className="sm : mx-10 my-5">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="Lot name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Lot Name :
            </label>
            <input
              type="text"
              id="lot_id"
              value={lotData}
              onChange={(e) => setLotdata(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="Partname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Partname :
            </label>
            <input
              type="text"
              id="partname_id"
              value={partname}
              onChange={(e) => setPartname(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="Employee code"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Employee Code :
            </label>
            <input
              type="text"
              id="emp_id"
              value={empCode}
              onChange={(e) => setEmpCode(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-7 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default MachineReg;
