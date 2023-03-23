const generator = () => {
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
                type="text"
                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-slate-400"
                placeholder="Payee Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="">UPI ID</label>
              <input
                type="text"
                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-slate-400"
                placeholder="UPI ID"
              />
            </div>
            <div className="space-y-2">
              {" "}
              <label htmlFor="">Transaction Amount</label>
              <input
                type="text"
                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-slate-400"
                placeholder="Transaction Amount"
              />
            </div>
            <div className="space-y-2">
              {" "}
              <label htmlFor="">Description (Notes)</label>
              <input
                type="text"
                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-slate-400"
                placeholder="Description (Notes)"
              />
            </div>
            {/* make a download button */}
          </form>
          <div>asd</div>
        </div>
      </div>
    </div>
  );
};

export default generator;
