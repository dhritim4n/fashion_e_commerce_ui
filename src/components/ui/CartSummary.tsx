
export default function CartSummary() {

    const totalItems: number = 2
    const subtotal: number = 500

  return (
    <div className="w-full mt-6">

      {/* Subtotal Row */}
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-semibold">
          Subtotal <span className="text-gray-600 text-[15px]">({totalItems} items)</span>
        </p>
        <p className="text-[20px] font-bold">${subtotal}</p>
      </div>

      {/* Checkout Button */}
      <button
    
        className="w-full bg-black text-white text-[14px] tracking-[2px] py-3 mt-5 uppercase hover:bg-gray-900 transition"
      >
        Continue to Checkout
      </button>

      {/* Small Note */}
      <p className="text-center text-gray-700 text-sm mt-4">
        Psst, get it now before it sells out.
      </p>
    </div>
  );
}
