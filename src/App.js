import { useState } from "react";
import "./App.css";
import data from "./mockData.json";
import Pagination from "./Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const currentData = data.slice(firstIndex, lastIndex);

  return (
    <div className="App">
      <h1 className="font-bold text-4xl text-center m-8 p-2">Pagination</h1>
      <div className="text-center text-xl">
        <table className="mx-auto border-2 border-black p-4 m-4">
          <thead>
            <tr className="p-2 border-2 border-black">
              <td className="p-4 border-2 border-black">Employee ID</td>
              <td className="p-4 border-2 border-black">Employee Name</td>
              <td className="p-4 border-2 border-black">Department</td>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td className="p-4 border-2 border-black">
                  {item.employee_id}
                </td>
                <td className="p-4 border-2 border-black">{item.first_name}</td>
                <td className="p-4 border-2 border-black">{item.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination
          totalData={data.length}
          dataPerPage={dataPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
