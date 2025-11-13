import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Food", value: 4000 },
  { name: "Rent", value: 7000 },
  { name: "Shopping", value: 2000 },
  { name: "Travel", value: 1000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ChartPage = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold mb-4">Expense Chart</h2>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default ChartPage;
