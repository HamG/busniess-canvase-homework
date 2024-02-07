import { focusAtom } from 'jotai-optics';
import { atomWithStorage } from 'jotai/utils';
import { Benchmark } from '../types/benchmark';

const INITIAL_BENCHMARK = {
  title: '',
  description: '',
  sources: [],
};

export const benchmarkAtom = atomWithStorage<Benchmark>(
  'data',
  INITIAL_BENCHMARK
);

export const sourcesAtom = focusAtom(benchmarkAtom, (benchmark) =>
  benchmark.prop('sources')
);
