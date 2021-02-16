import { Item, updateQuality } from './gilded_rose';

describe('updating of standard items', () => {
  it('decreases the sell_in of a standard item by 1', () => {
    const standardItem = new Item('Hand of Thor', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it('decreases the quality of a standard item by 1', () => {
    const standardItem = new Item('Hand of Thor', 10, 30);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(29);
  });

  it('decreases the quality of a standard item by 2 if the sell_in is less than 0', () => {
    const standardItem = new Item('Hand of Thor', 0, 20);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(18);
  });
});

describe('updating of aged brie', () => {
  const agedBrie = new Item('Aged Brie', 2, 0);

  afterEach(() => {
    // updates the quality and sell_in back to original quantities
    agedBrie.sell_in = 2;
    agedBrie.quality = 0;
  });

  it('increments in quality by 1', () => {
    updateQuality([agedBrie]);
    expect(agedBrie.quality).toBe(1);
  });

  it('decrements the sell_in by 1', () => {
    updateQuality([agedBrie]);
    expect(agedBrie.sell_in).toBe(1);
  });

  it('does not increase the quality to more than 50', () => {
    agedBrie.quality = 50;
    updateQuality([agedBrie]);
    expect(agedBrie.quality).toBe(50);
  });

  it('increases in quality twice as fast if sell_in is less than 0', () => {
    agedBrie.sell_in = -1;
    updateQuality([agedBrie]);
    expect(agedBrie.quality).toBe(2);
  });
});

describe('updating of backstage passes', () => {
  it.todo('decreases the sell_in of backstage passes by 1');

  it.todo('increases the quality of backstage passes by 2 if there are 10 sell_in days or less');

  it.todo('increases the quality of backstage passes by 3 if there are 5 sell_in days or less');

  it.todo('decreases the quality of backstage passes to 0 if there are 0 sell_in days or less');

  it.todo('does not update the quality of backstage passes to more than 50');
});

describe('updating of sulfuras', () => {
  it.todo('does not update sell_in of sulfuras');

  it.todo('does not update the quality of sulfuras');
});

describe('updating of conjured items', () => {
  it.todo('decreases the sell_in of conjured items by 1');

  it.todo('decreases the quality of of conjured items by 2');
});
