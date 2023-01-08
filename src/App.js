
export default function App() {
  return (
     <div className="bg-gradient-6">
      <div className="grid md:grid-cols-2 mx-8 md:mx-32 py-6 md:py-24">
        <div className="md:my-auto">
          <h1 className="text-3xl md:text-6xl text-center md:text-left font-medium mb-2">Jakarta</h1>
          <h3 className="text-xl md:text-3xl text-center md:text-left">06.09 - Sunday 6, Oct 2019</h3>
        </div>
        <div className="flex flex-col justify-center items-center md:hidden my-8 md:my-0">
          <div className="">
            <p className="text-8xl">12°</p>
          </div>
        </div>
        <div className="my-auto">
          <table className="table-auto w-full">
            <tbody>
              <tr className="border-b">
                <td className="py-2">Cloudy</td>
                <td className="font-semibold text-right">82%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Humidity</td>
                <td className="font-semibold text-right">62%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Wind</td>
                <td className="font-semibold text-right">8km/h</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Rain</td>
                <td className="font-semibold text-right">8mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full h-72 my-16 md:my-0 bg-white bg-opacity-20 backdrop-blur-md rounded drop-shadow-lg">
        <div className="grid grid-cols-3 md:grid-cols-5 px-2 md:px-16 py-2 md:py-16 h-full place-items-center">
          <div className="hidden md:block md:col-span-1">
            <img src="/img/sun.png" alt="" className="w-28 h-28" />
          </div>
          <div className="hidden md:block md:col-span-1 mr-8">
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

      <footer>
       
      </footer>
    </div>
  );
}
