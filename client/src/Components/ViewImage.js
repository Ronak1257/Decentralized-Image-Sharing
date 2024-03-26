import { useState } from "react";

function ViewImage(props) {
const [data, setData] = useState("");

const getdata = async () => {
  let dataArray;
  const Otheraddress = document.querySelector(".address").value;
  try {
    if (Otheraddress) {
      dataArray = await (props.contract).display(Otheraddress);
      console.log(dataArray);
    } else {
      dataArray = await (props.contract).display(props.account);
      console.log(dataArray);
    }
  } catch (e) {
    alert("You don't have access");
  }
  try{
    const isEmpty = Object.keys(dataArray).length === 0;
    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log(str);
      console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
            className="h-32 m-4 rounded-sl"
              key={i}
              src={`${item}`}
              alt="new"
            ></img>
          </a>
        );
      });
      setData(images);
    }
  }
  catch(e){
    alert("No image to display");
  }
};

return (
   <>
    <div className="flex justify-center  py-2 rounded-xl">
      <input
        type="text"
        placeholder="Enter Address"
        className="px-4 py-2 rounded-xl address focus:outline-none bg-slate-700"
      ></input>
      <button className="mx-4 px-4 rounded-2xl bg-slate-500" onClick={() => {getdata()}}>
        Get Data
      </button>
    </div>
    <div className="bg-slate-900 rounded-xl mt-8 flex flex-wrap w-auto items-baseline justify-between">{data}
    </div>
   </>
);
}

export default ViewImage;
