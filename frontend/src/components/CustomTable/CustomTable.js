/* This example requires Tailwind CSS v2.0+ */
const hotels = [
    {
        name: 'Splendid',
        price: '85$',
        price2: '185$',
        price3: '185$',
        image:
        'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    },
    {
        name: 'Mediteran',
        price: '40$',
        price2: '123$',
        price3: '123$',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
    },
    {
        name: 'Hotel Park',
        price: '35$',
        price2: '94$',
        price3: '94$',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YbYJqqJ8EzDJmeK71gQAlfzOLSMbbtD3Ig&usqp=CAU',
    },
]
  
export default function CustomTable() {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 shadow-2xl">
                <thead className="bg-blue-500">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider text-center"
                    >
                      Hotels
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider text-center"
                    >
                      Single Room
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider text-center"
                    >
                      Double Room**
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider text-center"
                    >
                      Bed in double room
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {hotels.map((hotel) => (
                        <tr key={hotel.name}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center justify-start" style={{ marginLeft: "20%"}}>
                                    <div className="flex-shrink-0 h-10 w-16">
                                        <img className="h-10 w-16 rounded-md" src={hotel.image} alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {hotel.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900  text-center">
                                    <div className="form-check">
                                        <input style={{ float: 'revert'}} className="form-check-input appearance-none rounded-full h-4 w-4  border border-gray-300 mr-2 float-right bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault12"/>
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault12" style={{ paddingTop: 2}}>
                                            {hotel.price}
                                        </label>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                <div className="form-check">
                                    <input style={{ float: 'revert'}} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white mr-2 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label inline-block text-gray-800 "  htmlFor="flexRadioDefault1" style={{ paddingTop: 2}}>
                                        {hotel.price2}
                                    </label>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                <div className="form-check">
                                    <input style={{ float: 'revert'}} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white mr-2 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label inline-block text-gray-800 "  htmlFor="flexRadioDefault1" style={{ paddingTop: 2}}>
                                        {hotel.price3}
                                    </label>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}
  