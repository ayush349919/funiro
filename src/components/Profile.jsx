const Profile = () => {
  // Mock data - You can later replace this with your Auth state
  const user = {
    name: "Aryan Sharma",
    email: "aryan.sharma@email.com",
    memberSince: "Oct 2023",
    avatar: "https://dicebear.com",
    recentOrders: [
      { id: "#ORD-9921", status: "Delivered", date: "24 Mar", total: "$120.00" },
      { id: "#ORD-8832", status: "Shipped", date: "02 Apr", total: "$45.50" }
    ]
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 font-poppins">
      {/* Header Section */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
        <img src={user.avatar} alt="User" className="w-24 h-24 rounded-2xl bg-blue-50 p-2" />
        <div className="text-center md:text-left grow">
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
            Premium Member
          </span>
        </div>
        <button className="px-6 py-2 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all text-sm text-gray-600">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Navigation Sidebar */}
        <div className="bg-white rounded-3xl border border-gray-100 p-4 space-y-2 h-fit">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-2xl font-bold">
            📦 <span>My Orders</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-2xl transition-all">
            📍 <span>Saved Addresses</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-2xl transition-all">
            💳 <span>Payment Methods</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-2xl transition-all mt-4 border-t pt-4">
            ⬅️ <span>Logout</span>
          </button>
        </div>

        {/* Content Area: Recent Orders */}
        <div className="md:col-span-2 bg-white rounded-3xl border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {user.recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-all">
                <div>
                  <p className="font-bold text-gray-700">{order.id}</p>
                  <p className="text-xs text-gray-400">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{order.total}</p>
                  <p className={`text-xs font-semibold ${order.status === 'Delivered' ? 'text-green-500' : 'text-orange-500'}`}>
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 text-sm text-blue-600 font-bold hover:underline">
            View All Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
