import DateFilter from 'components/input/DateFilter';
import { Button, Flexbox } from 'react-basics';
import { useDateRange, useMessages } from 'components/hooks';
import { DEFAULT_DATE_RANGE } from 'lib/constants';
import { DateRange } from 'lib/types';

export function DateRangeSetting() {
  const { formatMessage, labels } = useMessages();
  const [dateRange, setDateRange] = useDateRange();
  const { value } = dateRange;

  const handleChange = (value: string | DateRange) => setDateRange(value);
  const handleReset = () => setDateRange(DEFAULT_DATE_RANGE);

  return (
    <Flexbox gap={10}>
      <DateFilter
        value={value}
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        onChange={handleChange}
      />
      <Button onClick={handleReset}>{formatMessage(labels.reset)}</Button>
    </Flexbox>
  );
}

export default DateRangeSetting;
