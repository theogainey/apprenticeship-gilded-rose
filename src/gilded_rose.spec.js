import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it('decrements the quality of a haunted shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it.todo('This is a good place for a good test!');
});
