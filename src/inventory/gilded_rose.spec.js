import { Item, updateQuality } from './gilded_rose';

describe('updateQuality', () => {
  it('deprecates `sell_in` by 1 for +5 Dexterity Vest', () => {
    const standardItem = new Item('+5 Dexterity Vest', 10, 10);
    const newItems = updateQuality([standardItem]);
    expect(newItems[0].quality).toBe(9);
  });

  it('deprecates `quality` by 1 for +5 Dexterity Vest', () => {
    const standardItem = new Item('+5 Dexterity Vest', 10, 10);
    const newItems = updateQuality([standardItem]);
    expect(newItems[0].quality).toBe(9);
  });

  it('deprecates `quality` by 2 for +5 Dexterity Vest when `sell_in` is less than 0', () => {
    const standardItem = new Item('+5 Dexterity Vest', -1, 10);
    const newItems = updateQuality([standardItem]);
    expect(newItems[0].quality).toBe(8);
  });

  it('deprecates `sell_in` by 1 for +5 Dexterity Vest when `quailty` is 0', () => {
    const standardItem = new Item('+5 Dexterity Vest', 10, 0);
    const newItems = updateQuality([standardItem]);
    expect(newItems[0].sell_in).toBe(9);
  });

  it('does not deprecate `quality` for +5 Dexterity Vest when `quailty` is 0', () => {
    const standardItem = new Item('+5 Dexterity Vest', 10, 0);
    const newItems = updateQuality([standardItem]);
    expect(newItems[0].quality).toBe(0);
  });

  it('deprecates `sell_in` by 1 for Aged Brie', () => {
    const agedBrie = new Item('Aged Brie', 2, 0);
    const newItems = updateQuality([agedBrie]);
    expect(newItems[0].sell_in).toBe(1);
  });

  it('increases `quailty` by 1 for Aged Brie', () => {
    const agedBrie = new Item('Aged Brie', 2, 0);
    const newItems = updateQuality([agedBrie]);
    expect(newItems[0].sell_in).toBe(1);
  });

  it('increases `quailty` by 2 for Aged Brie when `sell_in` is less than 0', () => {
    const agedBrie = new Item('Aged Brie', -1, 0);
    const newItems = updateQuality([agedBrie]);
    expect(newItems[0].quality).toBe(2);
  });

  it('will not increase `quailty` to greater than 50', () => {
    const agedBrie = new Item('Aged Brie', 0, 50);
    const newItems = updateQuality([agedBrie]);
    expect(newItems[0].quality).toBe(50);
  });

  it('keeps Sulfuras `sell_in` and `quality` constant', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    const newItems = updateQuality([sulfuras]);
    expect(newItems[0].quality).toBe(80);
    expect(newItems[0].sell_in).toBe(0);
  });

  it('deprecates `sell_in` by 1 for Backstage passes', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
    const newItems = updateQuality([backstagePasses]);
    expect(newItems[0].sell_in).toBe(14);
  });

  it('increases `quality` by 1 for Backstage passes when `sell_in` is greater than 10', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
    const newItems = updateQuality([backstagePasses]);
    expect(newItems[0].quality).toBe(21);
  });

  it('increases `quality` by 2 for Backstage passes when `sell_in` is less than 10', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20);
    const newItems = updateQuality([backstagePasses]);
    expect(newItems[0].quality).toBe(22);
  });

  it('increases `quality` by 3 for Backstage passes when `sell_in` is less than 5', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20);
    const newItems = updateQuality([backstagePasses]);
    expect(newItems[0].quality).toBe(23);
  });

  it('deprecates `quality` to 0 for Backstage passes, when `sell_in` is 0', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
    const newItems = updateQuality([backstagePasses]);
    expect(newItems[0].quality).toBe(0);
  });

  it('deprecates `quality` by 2 for "Conjured" item', () => {
    const conjuredItem = new Item('Conjured Mana Cake', 3, 6);
    const newItems = updateQuality([conjuredItem]);
    expect(newItems[0].quality).toBe(4);
  });
});
