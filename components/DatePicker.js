import React, {useState} from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { UsersIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const DatePicker = ({searchInput, onClear}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const router = useRouter();
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numGuests
      }
    })
  }

  return (
    <div className="flex flex-col col-span-3 mx-auto">
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#FD5B61']}
        onChange={handleSelect}
      />
      <div className="flex items-center mb-4 border-b">
        <h2 className="text-2xl font-semi-bold flex-grow">Number of Guests</h2>
        <UsersIcon className="h-6" />
        <input
          type="number"
          className="outline-none w-12 pl-2 text-lg text-red-400"
          value={numGuests}
          onChange={(e) => setNumGuests(e.target.value)}
          min={1}
        />
      </div>
      <div className="flex">
        <button
          className="flex-grow text-gray-500"
          onClick={onClear}
        >
          Cancel
        </button>
        <button className="flex-grow text-red-400" onClick={search}>Search</button>
      </div>
    </div>
  );
};

export default DatePicker;
