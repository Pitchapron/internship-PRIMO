import { merge } from '../src/merge';

describe('merge function', () => {
  it('should merge two ascending sorted arrays and one descending sorted array', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6, 7, 8];
    const collection_3 = [9, 7, 5, 3, 1];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9]);
  });

  it('should handle when collection_1 and collection_2 are empty', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3 = [9, 7, 5, 3, 1];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

  it('should handle when all collections are empty', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  it('should merge when collection_3 is in descending order but other collections have only one element each', () => {
    const collection_1 = [1];
    const collection_2 = [2];
    const collection_3 = [5, 4, 2];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 2, 4, 5]);
  });
});
