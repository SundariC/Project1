const Dashboard = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Balance</h3>
          <p className="text-2xl">₹15,000</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Total Income</h3>
          <p className="text-2xl">₹25,000</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Total Expense</h3>
          <p className="text-2xl">₹10,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
