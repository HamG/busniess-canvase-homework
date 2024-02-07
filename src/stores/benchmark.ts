import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { Benchmark } from '../types/benchmark';

export const INITIAL_BENCHMARK = {
  title: '',
  description: '',
  sources: [],
};

export const benchmarkAtom = atom<Benchmark>(INITIAL_BENCHMARK);

export const sourcesAtom = focusAtom(benchmarkAtom, (benchmark) =>
  benchmark.prop('sources')
);
