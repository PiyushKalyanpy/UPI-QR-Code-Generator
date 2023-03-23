import QRCode from "react-qr-code";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

const Generator = () => {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [formData, setFormData] = useState({
    payeeName: "",
    upiId: "",
    transactionAmount: 0,
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
      formData.transactionAmount == 0 ||
      formData.description == ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (typeof window !== "undefined") {
      console.log("window is undefined");
      let count = localStorage.getItem("count");
      localStorage.setItem("count", String(Number(count) + 1));
    }
    const qrValue = `upi://pay?pa=${formData.upiId}&pn=${formData.payeeName}&am=${formData.transactionAmount}&tn=${formData.description}&cu=INR`;
    setQrCodeValue(qrValue);
  };

  return (
    <div className="flex flex-col items-center w-full md:h-screen max:h-fit   overflow-hidden bg-slate-100">
      <div className="flex flex-col items-center m-auto ">
        <div className="flex flex-col space-y-4 items-center sm:pt-10">
          <h1 className="font-bold font-urbanist  text-4xl pt-10 lg:pt-0 text-slate-800 ">
            Generate UPI QR code{" "}
          </h1>
          <h2 className=" text-xl font-inter text-slate-500 text-center">
            Simplify your payment process with
          </h2>
          <h1 className="text-sky-500 font-extrabold text-3xl m-2 bg-gradient-to-r from-blue-600 via-sky-400 to-pink-400 inline-block text-transparent bg-clip-text font-urbanist">
            {" "}
            ShufflePay
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-10  w-10/12 lg:w-1/2 bg-white p-8 m-10 rounded-3xl h-fit ">
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
                min={0}
                max={5000}
                value={formData.transactionAmount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    transactionAmount: Number(e.target.value),
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

          <div className="flex flex-col  gap-4 h-full">
            <div className="relative my-4  w-3/4 md:w-1/2 md:mt-10 m-auto md:h-64 mx-auto rounded-3xl overflow-hidden  items-center">
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
            <div className="flex my-4  h-1/2 mx-auto  overflow-hidden  items-center">
              <div className="flex flex-col space-y-10  mt-auto ">
                <div className="grid grid-cols-2 gap-4 items-center justify-items-center ">
                  <Image src="./up01.svg" width="130" alt="gpay" height="30" />
                  <Image src="./up02.svg" width="90" alt="gpay" height="30" />
                </div>
                <div className="grid grid-cols-4 gap-4 items-center justify-items-center ">
                  <Image
                    src="./bottom02.svg"
                    width="45"
                    alt="gpay"
                    height="30"
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
                    src="./bottom04.svg"
                    width="190"
                    alt="gpay"
                    height="60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
