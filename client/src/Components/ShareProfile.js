import { useState,useEffect } from "react";

function ShareProfile(props){
    const [modalOpen, setModalOpen] = useState(false);
    const sharing = async () => {
        const address = document.querySelector(".address").value;
        await props.contract.allow(address);
        setModalOpen(false);
      };
      useEffect(() => {
        const accessList = async () => {
          const addressList = await (props.contract).shareAccess();
          let select = document.querySelector("#selectNumber");
          const options = addressList;
    
          for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            let e1 = document.createElement("option");
            e1.textContent = opt;
            e1.value = opt;
            select.appendChild(e1);
          }
        };
        props.contract && accessList();
      }, [props.contract]);

    return<>
    <div className="text-center">
    {!modalOpen && (
      <div>
        <button className="bg-slate-900 ring-2 ring-pink-500 ring-offset-2 w-32 m-4 rounded-xl p-2 text-xl" onClick={() => setModalOpen(true)}>
          Share
        </button>
        <div>
        <div>List of Account that can access your Account</div>
        <div id="selectNumber">
        </div>
        </div>
    </div>
    )}
    {modalOpen && (
    <div className="ring-8 rounded-xl ring-slate-500 p-4 m-2">
        <div className="bg-zinc-950 mx-4">
            <div className="text-center text-2xl mb-4">Share with</div>
            <div className="text-center">
            <input
                type="text"
                className="pl-4 text-white text-base address bg-white w-full ring-2 ring-blue-500 rounded-xl p-2 focus:outline-none text-black"
                placeholder="Enter Address"
            ></input>
            </div>
            <form className="text-center" id="myForm">
            <select className="border-2 px-8 bg-black m-4" id="selectNumber">
                <option>People With Access</option>
            </select>
            </form>
            <div className="footer text-center pb-4">
            <button className=" border-2 rounded-xl p-1 mr-4"
                onClick={() => {
                setModalOpen(false);
                }}
                id="cancelBtn"
            >
                Cancel
            </button>
            <button className="border-2 rounded-xl p-1 ml-4" onClick={() => sharing()}>Share</button>
            </div>
        </div>
    </div>
    )}
    
    </div>
    </>
}
export default ShareProfile;