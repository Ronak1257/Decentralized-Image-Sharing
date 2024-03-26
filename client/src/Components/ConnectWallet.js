import { ethers } from "ethers";
import Upload from "../artifacts/contracts/Upload.sol/Upload.json";
import { useState } from "react";
function ConnectWallet(props){
    const [account,setAccount]=useState();
    const loadProvider = async () => {
        const providerr = new ethers.providers.Web3Provider(window.ethereum);
        if (providerr) {
            window.ethereum.on("chainChanged", () => {
                window.location.reload();
            });
            window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });
        }
        else {
            console.error("Metamask is not installed");
        }
        await providerr.send("eth_requestAccounts", []);
        const signer = providerr.getSigner();
        const address = await signer.getAddress();
        setAccount(account);
        let contractAddress = "0x13012616F883cA5af7171F9F3F24B60Dc3172b7a";
        
        const contract = new ethers.Contract(
            contractAddress,Upload.abi,signer
            );
            console.log("Connection successfull")
            props.getData(address,contract);
    };
    return<>
    <div className="flex flex-row items-center pt-8">
        <div className="flex-flex-col justify-center items-center">
            <h1 className="text-6xl font-black"><span className="text-emerald-500">Meet Sharing.</span> Decentralized Image and Profile Sharing Platform</h1>
            <p className="mt-8 mb-1.5 text-base">Join our Community for sharing Image <br/>with your Friend privately</p>
            <button onClick={()=>{loadProvider()}} className="mt-8 px-32 py-3 rounded-full text-2xl font-bold text-xl bg-slate-800 hover:bg-sky-900 ring-4 ring-slate-500 ring-offset-2" type="button" >Connect Wallet</button>
        </div>
        <div>
            <img className="h-auto mx-8" src="https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-data-transfer-icon-network-share-laptop-to-laptop-transfer-pc-to-pc-vector-png-image_38128086.png" alt="Image sharing" />
        </div>
    </div>

    </>
}
export default ConnectWallet;