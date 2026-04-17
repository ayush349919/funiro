const Profile = () => {
  // Mock data
  const user = {
    name: "Aryan Sharma",
    email: "aryan.sharma@email.com",
    memberSince: "Oct 2023",
    avatar: "https://dicebear.com", // Fixed URL
    recentOrders: [
      { id: "#ORD-9921", status: "Delivered", date: "24 Mar", total: "$120.00" },
      { id: "#ORD-8832", status: "Shipped", date: "02 Apr", total: "$45.50" }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 font-poppins transition-colors duration-300">
      {/* Header Section: Added dark:bg-zinc-900 dark:border-zinc-800 */}
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row items-center gap-6 transition-colors">
        <img src={user.avatar} alt="User" className="w-24 h-24 rounded-2xl bg-blue-50 dark:bg-zinc-800 p-2 border dark:border-zinc-700" />
        <div className="text-center md:text-left grow">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{user.email}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">
            Premium Member
          </span>
        </div>
        <button className="px-6 py-2 border border-gray-200 dark:border-zinc-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all text-sm text-gray-600 dark:text-gray-300">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Navigation Sidebar: Added dark:bg-zinc-900 */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 p-4 space-y-2 h-fit">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-[#B88E2F]/20 text-blue-600 dark:text-[#B88E2F] rounded-2xl font-bold">
            📦 <span>My Orders</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-2xl transition-all">
            📍 <span>Saved Addresses</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-2xl transition-all">
            💳 <span>Payment Methods</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl transition-all mt-4 border-t dark:border-zinc-800 pt-4">
            ⬅️ <span>Logout</span>
          </button>
        </div>

        {/* Content Area: Added dark:bg-zinc-900 */}
        <div className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 p-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {user.recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border border-gray-50 dark:border-zinc-800 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-all">
                <div>
                  <p className="font-bold text-gray-700 dark:text-gray-200">{order.id}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800 dark:text-white">{order.total}</p>
                  <p className={`text-xs font-semibold ${order.status === 'Delivered' ? 'text-green-500' : 'text-orange-500'}`}>
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 text-sm text-blue-600 dark:text-[#B88E2F] font-bold hover:underline">
            View All Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
