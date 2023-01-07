import React from "react";

function Weather() {
  return (
    <div className="bg-gradient-1">
      <div className="grid grid-cols-2 mx-32 py-24">
        <div className="my-auto">
          <h1 className="text-6xl font-medium mb-2">Jakarta</h1>
          <h3 className="text-3xl">06.09 - Sunday 6, Oct 2019</h3>
        </div>
        <div className="my-auto">
          <table className="table-auto">
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-72">Cloudy</td>
                <td className="font-semibold">82%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-72">Humidity</td>
                <td className="font-semibold">62%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-72">Wind</td>
                <td className="font-semibold">8km/h</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-72">Rain</td>
                <td className="font-semibold">8mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full h-72 bg-white bg-opacity-20 backdrop-blur-xl rounded drop-shadow-lg">
        <div className="grid grid-cols-5 px-16 py-16 h-full place-items-center">
          <div className="col-span-1">
            <img src="/img/sun.png" alt="" className="w-28 h-28" />
          </div>
          <div className="col-span-1 mr-8">
            <h3 className="text-4xl">TODAY</h3>
            <p className="text-8xl">12°</p>
          </div>
          <div className="col-span-1 text-center">
            <h3 className="text-xl">Tue</h3>
            <img src="/img/sun.png" alt="" className="w-16 h-16 my-4" />
            <p className="text-xl">20°</p>
          </div>
          <div className="col-span-1 text-center">
            <h3 className="text-xl">Wed</h3>
            <img src="/img/sun.png" alt="" className="w-16 h-16 my-4" />
            <p className="text-xl">22°</p>
          </div>
          <div className="col-span-1 text-center">
            <h3 className="text-xl">Thu</h3>
            <img src="/img/sun.png" alt="" className="w-16 h-16 my-4" />
            <p className="text-xl">23°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
