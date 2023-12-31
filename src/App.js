import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Dosa Camp',
    amount: 200,
    date: new Date(2020, 6, 1),
  },
  { 
  id: 'e2', 
  title: 'Corner House', 
  amount: 450, 
  date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Dominos',
    amount: 700,
    date: new Date(2019, 2, 28),
  },
  {
    id: 'e4',
    title: 'Meghana Foods',
    amount: 2150,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e5',
    title: 'Desi Masala',
    amount: 950,
    date: new Date(2023, 9, 18),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;