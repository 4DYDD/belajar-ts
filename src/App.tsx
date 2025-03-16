import { useEffect, useState } from "react";
import "./App.css";
import { fetchDataBodong, DataBodongnya } from "./service/api";

function App() {
  const [dataBodong, setDataBodong] = useState<Array<DataBodongnya>>([]);
  const haveDataBodong = dataBodong.length > 0;

  useEffect(() => {
    setTimeout(() => {
      setDataBodong(fetchDataBodong());
    }, 600);
  }, []);

  return (
    <main className="flex-col font-montserrat flexc">
      <div>home</div>
      <div>apakah terdapat perubahan?</div>
      <div>wow ada perubahan ternyata!</div>

      <div className="grid w-1/2 grid-cols-2 gap-5 text-center mt-60">
        {haveDataBodong &&
          dataBodong.map((value, index) => (
            <ul
              className="flex-col border rounded-lg shadow h-36 flexc shadow-gray-400"
              key={`data-bodong-${index}`}
            >
              <li>{value.id}</li>
              <li>{value.name}</li>
              <li>{value.price}</li>
            </ul>
          ))}
      </div>
    </main>
  );
}

export default App;
