import { PlusIcon } from 'lucide-react';

import { useStore } from '@/src/hooks/use-store';

export default function App() {
  const { count, inc } = useStore((state) => state);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100'>
      <div className='p-8 bg-white rounded-lg shadow-md flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Qty</h1>
        <div className='text-6xl font-bold text-center mb-6'>{count}</div>
        <button
          onClick={inc}
          className='flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 w-full rounded-full active:scale-95'
        >
          <PlusIcon />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
