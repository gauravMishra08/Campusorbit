import { Phone, MenuIcon } from "lucide-react"

const QuickServe = () => {
  const outlets = [
    {
      id: 1,
      name: "Classic Biriyani",
      description: "Desi Hyderabadi Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      name: "Classic Biriyani",
      description: "Desi Hyderabadi Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
    },
    {
      id: 3,
      name: "Classic Biriyani",
      description: "Desi Hyderabadi Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
    },
    {
      id: 4,
      name: "Classic Biriyani",
      description: "Desi Hyderabadi Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
    },
    {
      id: 5,
      name: "Classic Biriyani",
      description: "Desi Hyderabadi Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
    },
    {
      id: 6,
      name: "Classic Biriyani",
      description: "Desi Hyderabadi Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
    },
    {
      id: 7,
      name: "Classic Biriyani",
      description: "Desi Hyderabadi Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
    },
    {
      id: 8,
      name: "Classic Biriyani",
      description: "Desi Hyderabadi Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+91 98765 43210",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">QuickServe</h1>
        <p className="text-lg text-[#22C55E]">Order food in advance, skip queues, and enjoy your meal anytime!</p>
      </div>

      {/* Special Offer Banner */}
      <div className="relative bg-gradient-to-r from-[#2A2A2E] to-[#2D2D30] rounded-2xl overflow-hidden border border-[#2D2D30]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800)",
          }}
        />
        <div className="relative p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F5] mb-2">Special Thali Offer at Google Food Park</h2>
          <p className="text-[#A1A1AA] mb-4">Get 20% off on all thali orders above ₹200</p>
          <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg">
            Grab Deal
          </button>
        </div>
      </div>

      {/* Outlets Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F5] mb-6">Outlets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outlets.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200"
            >
              <img src={outlet.image || "/placeholder.svg"} alt={outlet.name} className="w-full h-40 object-cover" />
              <div className="p-5 space-y-4">
                <h3 className="text-lg font-bold text-[#22C55E]">{outlet.name}</h3>
                <p className="text-[#A1A1AA] text-sm">{outlet.description}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-lg">
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                  <button className="flex-1 bg-[#FF6B6B] hover:bg-[#EF4444] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-lg">
                    <MenuIcon className="w-4 h-4" />
                    Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickServe
