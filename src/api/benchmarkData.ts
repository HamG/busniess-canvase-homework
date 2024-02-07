import localForage from 'localforage';
import { Benchmark } from '../types/benchmark';
import { INITIAL_BENCHMARK } from '../stores/benchmark';

const DATA_KEY = 'data';

const getBenchmarkData = async () => {
  try {
    const data = await localForage.getItem<Benchmark>(DATA_KEY);
    if (!data) return INITIAL_BENCHMARK;
    return data;
  } catch (err) {
    return INITIAL_BENCHMARK;
  }
};

const setBenchmarkData = async (data: Benchmark) => {
  try {
    await localForage.setItem(DATA_KEY, data);
  } catch (err) {
    alert('저장에 실패했어요.');
  }
};

export { getBenchmarkData, setBenchmarkData };
