import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from "../styles/Home.module.css";

const generator = () => {
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
  const generateQR = (e) => {
    e.preventDefault();
    
    if(formData.payeeName == "" || formData.upiId == "" || formData.transactionAmount == 0 || formData.description == ""){
        alert("Please fill all the fields");
        return;
    }
    const qrValue = `upi://pay?pa=${formData.upiId}&pn=${formData.payeeName}&am=${formData.transactionAmount}&tn=${formData.description}&cu=INR`;
    setQrCodeValue(qrValue);
    if (typeof window !== "undefined") {
      console.log("window is undefined");
      let count = localStorage.getItem("count");
      localStorage.setItem("count", String(Number(count) + 1));
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-hidden bg-slate-100">
      <div className="flex flex-col items-center m-auto">
        <div className="flex flex-col items-center ">
          <h1 className="font-bold text-4xl text-slate-800 ">
            Generate UPI QR code{" "}
          </h1>
          <h2 className=" text-xl text-slate-500">
            Simplify your payment process
          </h2>
        </div>
        <div className="grid grid-cols-2 w-3/4 bg-white p-8 m-10 rounded-3xl h-fit ">
          {/* div for User Inputs */}
          <form action="" className="m-auto w-3/4 space-y-4">
            <div className="space-y-2">
              <label htmlFor="">Payee/Merchant Name</label>
              <input
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
              <label htmlFor="">UPI ID</label>
              <input
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
              <label htmlFor="">Transaction Amount</label>
              <input
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
              <label htmlFor="">Description (Notes)</label>
              <input
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
          <div>
            <div>
              <div>Generate QR</div>

              {qrCodeValue != "" && (
                <QRCode
                  value={qrCodeValue}
                  className={styles.containerColumn}
                />
              )}
              <input
                onChange={(e) => {
                  setQrCodeValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default generator;
