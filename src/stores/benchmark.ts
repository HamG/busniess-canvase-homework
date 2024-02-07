import { atom } from 'jotai';
import { Benchmark } from '../types/benchmark';
import { focusAtom } from 'jotai-optics';

const INITIAL_BENCHMARK = {
  title: '',
  description: '',
  sources: [],
};

export const benchmarkAtom = atom<Benchmark>(INITIAL_BENCHMARK);

export const sourcesAtom = focusAtom(benchmarkAtom, (benchmark) =>
  benchmark.prop('sources')
);
