import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ovenImg from "../assets/images/oven_img.png";
import Modal from "../components/modal.component";

const Operate = () => {
  const [remainTime, setRemainTime] = useState();
  const [partname, setPartname] = useState();
  const [lotname, setLotname] = useState();
  const { machineName } = useParams(); // ดึงค่าจาก URL
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thankyou"); // นำทางไปยังหน้าที่ต้องการหลังจากส่งฟอร์ม
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 mb-5">
          <label className="text-lg font-medium text-gray-900 ">
            MACHINE NAME : {machineName}
          </label>
        </div>
        <div className="mt-5 mb-10">
          <img src={ovenImg} alt="oven" style={{ width: 144, height: 145 }} />
        </div>
        <div className="mt-2 mb-2">
          <label className="text-lg font-medium text-gray-900 ">
            Counting Down
          </label>
        </div>
        <div className="mb-2">
          <label className="text-lg font-medium text-gray-900 ">
            {machineName}
          </label>
        </div>
      </div>
      <div className="sm : mx-10 my-5">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="Lot name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Lot Name :
            </label>
            <p></p>
          </div>
          <div className="mb-5">
            <label
              htmlFor="Partname"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Partname :
            </label>
            <p></p>
          </div>
          <div className="mb-5">
            <label
              htmlFor="Employee code"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Employee Code :
            </label>
            <p></p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Finish
          </button>
        </form>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          console.log("Modal closed.");
          setIsModalOpen(false);
        }}
        header={"Employee Confirm "}
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Employee Code :
            </label>
            <input
              type="text"
              name="emp_code"
              id="cnf_emp_code"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="909XX"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Operate;
