import QRCode from "react-qr-code";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

const Generator = () => {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [formData, setFormData] = useState({
    payeeName: "",
    upiId: "",
    transactionAmount: "",
    description: "",
  });
  if (typeof window !== "undefined") {
    if (localStorage.getItem("count") == null) {
      localStorage.setItem("count", String(0));
    }
  }
  const generateQR = (e: any) => {
    e.preventDefault();

    if (
      formData.payeeName == "" ||
      formData.upiId == "" ||
      formData.transactionAmount == "" ||
      formData.description == ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (typeof window !== "undefined") {
      let count = localStorage.getItem("count");
      localStorage.setItem("count", String(Number(count) + 1));
    }
    const qrValue = `upi://pay?pa=${formData.upiId}&pn=${formData.payeeName}&am=${formData.transactionAmount}&tn=${formData.description}&cu=INR`;
    setQrCodeValue(qrValue);
  };
  const handleCaptureClick = async () => {
    const qrCodeElement = document.querySelector<HTMLElement>(".qrCode");
    if (!qrCodeElement) return;
    const canvas = await html2canvas(qrCodeElement);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(
      dataURL,
      `${formData.payeeName + formData.transactionAmount}.png`,
      "image/png"
    );
  };

  return (
    <div className="flex flex-col items-center w-full lg:h-screen max:h-fit   overflow-hidden bg-slate-100">
      <div className="flex flex-col items-center m-auto ">
        <div className="flex flex-col space-y-4 items-center sm:pt-10">
          <h1 className="font-bold font-urbanist text-center text-4xl pt-10 lg:pt-0 text-slate-800 ">
            Generate UPI QR code{" "}
          </h1>
          <h2 className=" text-xl font-inter text-slate-500 text-center">
            Simplify your payment process with
          </h2>
          <h2 className="text-sky-500 font-extrabold text-3xl m-2 bg-gradient-to-r from-blue-600 via-sky-400 to-pink-400 inline-block text-transparent bg-clip-text font-urbanist">
            {" "}
            ShufflePay
          </h2>
        </div>
        <div className="grid s:grid-rows-2 lg:grid-cols-2 gap-18  w-10/12 lg:w-1/2 bg-white p-4 m-10 rounded-3xl h-fit ">
          {/* div for User Inputs */}
          <form
            autoComplete="on"
            action=""
            className="m-auto  md:w-10/12 space-y-4 autofill:bg-white "
          >
            <div className="space-y-2">
              <label htmlFor="payeeName" className="text-slate-500">
                Payee/Merchant Name
              </label>
              <input
                id="payeeName"
                name="payeeName"
                value={formData.payeeName}
                onChange={(e) =>
                  setFormData({ ...formData, payeeName: e.target.value })
                }
                type="text"
                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-slate-400"
                placeholder="Payee Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="upiId" className="text-slate-500">
                UPI ID
              </label>
              <input
                autoComplete="on"
                id="upiId"
                name="upiId"
                value={formData.upiId}
                onChange={(e) =>
                  setFormData({ ...formData, upiId: e.target.value })
                }
                type="text"
                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-slate-400"
                placeholder="UPI ID"
              />
            </div>
            <div className="space-y-2">
              {" "}
              <label htmlFor="transactionAmount" className="text-slate-500">
                Transaction Amount
              </label>
              <input
                id="transactionAmount"
                min={0}
                max={5000}
                value={formData.transactionAmount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    transactionAmount: e.target.value,
                  })
                }
                type="number"
                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-slate-400"
                placeholder="Transaction Amount"
              />
            </div>
            <div className="space-y-2">
              {" "}
              <label htmlFor="description" className="text-slate-500">
                Description (Notes)
              </label>
              <input
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                type="text"
                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-slate-400"
                placeholder="Description (Notes)"
              />
            </div>
            <button
              onClick={generateQR}
              className="w-full p-2 bg-sky-600 text-white rounded-lg"
            >
              Generate QR code
            </button>
          </form>
          {/* div for QR Code */}
          <div className="flex flex-col  gap-4 h-full qrCode">
            {qrCodeValue ? (
              <div className=" sacle-[2] absolute my-8 w-8 h-8  active:bg-slate-200  bg-gray-100 rounded-full items-center">
                <div
                  onClick={handleCaptureClick}
                  className="flex m-auto  items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-500 m-auto"
                  >
                    <path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                  </svg>
                </div>
              </div>
            ) : null}

            <div className="relative my-4 mt-10  w-3/4 md:w-1/2 md:mt-10 m-auto md:h-64 mx-auto rounded-3xl overflow-hidden  items-center">
              <Image
                src="./brandhive.svg"
                width="40"
                alt="ShufflePay"
                height="30"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
              />
              {qrCodeValue != "" && (
                <QRCode
                  value={qrCodeValue}
                  className="w-full h-full rounded-3xl overflow-hidden "
                />
              )}
            </div>

            <div className="flex h-1/2 md:mx-10  overflow-hidden  items-center">
              <div className="flex flex-col space-y-10 mb-8  mt-auto ">
                <div className="grid grid-cols-2 gap-4 items-center justify-items-center ">
                  <Image src="./up01.svg" width="110" alt="gpay" height="30" />
                  <Image src="./up02.svg" width="70" alt="gpay" height="30" />
                </div>
                <div className="grid grid-cols-4 gap-2 items-center justify-items-center ">
                  <Image
                    src="./bottom04.svg"
                    width="140"
                    alt="gpay"
                    height="60"
                  />
                  <Image
                    src="./bottom01.svg"
                    width="45"
                    alt="gpay"
                    height="30"
                  />

                  <Image
                    src="./bottom03.svg"
                    width="100"
                    alt="gpay"
                    height="30"
                  />

                  <Image
                    src="./bottom02.svg"
                    width="45"
                    alt="gpay"
                    height="30"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* div for Copyright and Tag */}
        </div>
        <div className="flex  col-span-2 m-4 self-center w-full items-center">
          <h6 className=" m-auto text-slate-400 text-center text-align-center font-urbanist">
            Copyright © 2023 | developed by
            <span className="text-blue-600 font-inter font-medium">
              <a href="https://www.linkedin.com/in/piyush-kalyan/">
                {" "}
                Piyush Kalyan{" "}
              </a>
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Generator;

// <h6 className="text-sm  text-slate-400 text-center font-urbanist">Copyright © 2023 | developed by
//           <span className="text-blue-400"><a href="https://www.linkedin.com/in/piyush-kalyan/"> Piyush Kalyan   </a></span>
//           </h6>
