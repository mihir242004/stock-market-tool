import React from 'react';
import { TrendingUp, TrendingDown, Minus, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for demonstration purposes
const mockData = {
  nifty: { current: 18500, prediction: 'up', suggestion: 'buy_call' },
  finNifty: { current: 19200, prediction: 'down', suggestion: 'buy_put' },
  bankNifty: { current: 42000, prediction: 'sideways', suggestion: 'hold' },
};

const chartData = [
  { name: 'Jan', Nifty: 17000, FinNifty: 17500, BankNifty: 40000 },
  { name: 'Feb', Nifty: 17500, FinNifty: 18000, BankNifty: 41000 },
  { name: 'Mar', Nifty: 18000, FinNifty: 18500, BankNifty: 41500 },
  { name: 'Apr', Nifty: 18500, FinNifty: 19000, BankNifty: 42000 },
];

function PredictionIcon({ prediction }: { prediction: string }) {
  switch (prediction) {
    case 'up':
      return <TrendingUp className="text-green-500" />;
    case 'down':
      return <TrendingDown className="text-red-500" />;
    default:
      return <Minus className="text-yellow-500" />;
  }
}

function SuggestionIcon({ suggestion }: { suggestion: string }) {
  switch (suggestion) {
    case 'buy_call':
      return <ArrowUpRight className="text-green-500" />;
    case 'buy_put':
      return <ArrowDownRight className="text-red-500" />;
    default:
      return <Minus className="text-yellow-500" />;
  }
}

function IndexCard({ name, data }: { name: string; data: any }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-4xl font-semibold mb-4">{data.current}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2">Prediction:</span>
          <PredictionIcon prediction={data.prediction} />
        </div>
        <div className="flex items-center">
          <span className="mr-2">Suggestion:</span>
          <SuggestionIcon suggestion={data.suggestion} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Market Analysis & Prediction</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <IndexCard name="Nifty" data={mockData.nifty} />
        <IndexCard name="FinNifty" data={mockData.finNifty} />
        <IndexCard name="BankNifty" data={mockData.bankNifty} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Historical Trends</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Nifty" stroke="#8884d8" />
            <Line type="monotone" dataKey="FinNifty" stroke="#82ca9d" />
            <Line type="monotone" dataKey="BankNifty" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;