import React, { useState } from "react";
import ConnectWallet from "./Components/ConnectWallet";
import UploadImage from "./Components/UploadImage";
import sharingLogo from "./sharing_logo.png";
import ViewImage from "./Components/ViewImage";
import ShareProfile from "./Components/ShareProfile";

function App() {
  const [page, setPage] = useState(0);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  function getData(account, contract, provider) {
    setAccount(account);
    setContract(contract);
  }

  return (
    <div className="flex bg-zinc-950 w-screen h-screen  text-white overflow-auto">
      <div className="box-border border-r-2 w-56 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center h-20">
            <img
              className="ring-1 ring-offset-2 ring-offset-slate-900 rounded-full object-cover m-4 h-10 w-40 "
              src={sharingLogo}
              alt="logo"
            />
          </div>
          <div className="flex flex-col px-4">
            <button
              onClick={() => {
                setPage(0);
              }}
              type="button"
              className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-zinc-950 hover:bg-pink-700 focus:bg-pink-700"
            >
              Home
            </button>
            <button
              onClick={() => {
                setPage(1);
              }}
              type="button"
              className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-zinc-950 hover:bg-pink-700 focus:bg-pink-700"
            >
              Upload Image
            </button>
            <button
              onClick={() => {
                setPage(2);
              }}
              type="button"
              className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-zinc-950 hover:bg-pink-700 focus:bg-pink-700"
            >
              View Image
            </button>
            <button
              onClick={() => {
                setPage(3);
              }}
              type="button"
              className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-zinc-950 hover:bg-pink-700 focus:bg-pink-700"
            >
              Share Profile
            </button>
          </div>
        </div>
      </div>
      <div className="grow flex justify-center">
        <div className="flex flex-col">
          
          <div className="grow flex flex-col justify-between h-full max-w-screen-2xl">
            <div className="px-16 flex flex-col">
              {account && (<h1 className="py-10 text-center">Connected Acccount : {account} </h1>)}
              {page === 0 && <ConnectWallet getData={getData} />}
              {page === 1 && <UploadImage account={account} contract={contract} />}
              {page === 2 && <ViewImage account={account} contract={contract} />}
              {page === 3 && <ShareProfile contract={contract} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
