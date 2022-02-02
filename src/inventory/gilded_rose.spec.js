import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it('deprecates the sell in by one for +5 Dexterity Vest	', () => {
    const standardItem = new Item('+5 Dexterity Vest	 Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
    expect(standardItem.quality).toBe(9);
  });

  it('deprecates the sell in by one for a +5 Dexterity Vest	 when sell in less than zero', () => {
    const standardItem = new Item('+5 Dexterity Vest	', -1, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(-2);
    expect(standardItem.quality).toBe(8);
  });

  it('deprecates the sell in by one for +5 Dexterity Vest	 when quailty zero', () => {
    const standardItem = new Item('+5 Dexterity Vest	', 10, 0);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(0);
    expect(standardItem.sell_in).toBeGreaterThanOrEqual(0);
  });

  it('deprecates the sell in by one for Aged Brie', () => {
    const agedBrie = new Item('Aged Brie', 2, 0);
    updateQuality([agedBrie]);
    expect(agedBrie.sell_in).toBe(1);
    expect(agedBrie.quality).toBe(1);
  });

  it('deprecates the sell in by one for Aged Brie sell in 0', () => {
    const agedBrie = new Item('Aged Brie', 0, 0);
    updateQuality([agedBrie]);
    expect(agedBrie.sell_in).toBe(-1);
    expect(agedBrie.quality).toBe(2);
  });


  it('item quailty cannot be over 50', () => {
    const agedBrie = new Item('Aged Brie', 0, 50);
    updateQuality([agedBrie]);
    expect(agedBrie.quality).toBe(50);
  });

  
  it('Sulfuras sell in and quality cannot be deprecated', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    updateQuality([sulfuras]);
    expect(sulfuras.quality).toBe(80);
    expect(sulfuras.sell_in).toBe(0);
  });

  it('deprecates the sell in by one for Backstage passes', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
    updateQuality([backstagePasses]);
    expect(backstagePasses.quality).toBe(21);
    expect(backstagePasses.sell_in).toBe(14);
  });

  it('deprecates the sell in by one for Backstage passes, 10 days left', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
    updateQuality([backstagePasses]);
    expect(backstagePasses.quality).toBe(22);
    expect(backstagePasses.sell_in).toBe(9);
  });

  it('deprecates the sell in by one for Backstage passes, 5 days left', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    updateQuality([backstagePasses]);
    expect(backstagePasses.quality).toBe(23);
    expect(backstagePasses.sell_in).toBe(4);
  });

  it('deprecates the sell in by one for Backstage passes, 0 days left', () => {
    const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
    updateQuality([backstagePasses]);
    expect(backstagePasses.quality).toBe(0);
    expect(backstagePasses.sell_in).toBe(-1);
  });

  it('deprecates the sell in by one for "Conjured" item', () => {
    const conjuredItem = new Item('Conjured Mana Cake', 3, 6);
    updateQuality([conjuredItem]);
    expect(conjuredItem.quality).toBe(4);
    expect(conjuredItem.sell_in).toBe(2);
  });


});

