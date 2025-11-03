import DeleteBookingButton from "@/app/myBookings/components/DeleteBookingButton";
import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const MyBookingsTable = ({ bookings }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-500">
        My Bookings
      </h2>

      <div className="overflow-x-auto shadow-md rounded-xl bg-white/10 backdrop-blur-lg border border-gray-500/30">
        <table className="min-w-full text-sm text-gray-200">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Service</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className=""
                >
                  <td className="py-3 px-4">
                    <Image
                      width={50}
                      height={50}
                      src={booking.service_image}
                      alt={booking.service_name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-3 px-4 font-medium">
                    {booking.service_name}
                  </td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4">${booking.service_price}</td>
                  <td className="py-3 px-4 flex items-center justify-center gap-3">
                    <Link href={`/myBookings/${booking._id}`}>
                      <FaEdit className="h-6 w-6 font-bold hover:text-gray-400 " />
                    </Link>
                    {/* <button
                      onClick={() => handleDelete(booking._id)}
                      className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition"
                    >
                      <FaTrash />
                    </button> */}
                    <DeleteBookingButton id={booking._id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-400 italic"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingsTable;
