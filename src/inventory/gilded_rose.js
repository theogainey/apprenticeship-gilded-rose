// Item constructor. DO NOT MODIFY OR THE GOBLIN WILL EAT YOU!
export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

/*
* Update inventory
* @param {Item[]} items - an array of Items representing the inventory to be updated
* Example usage:

const items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6),
];

updateQuality(items);
*/

const MAXIMUM_QUALITY = 50;
const MINIMUM_QUALITY = 0;

const enforceQualityBounds=(quality)=>{
  if(quality> MAXIMUM_QUALITY){
    return MAXIMUM_QUALITY;
  }
  if(quality< MINIMUM_QUALITY){
    return MINIMUM_QUALITY
  }
  return quality;
}


const updateBrieQuality = (sell_in, quality) => {
  const newQuality = sell_in<0? quality +2 : quality +1;
  return enforceQualityBounds (newQuality);
}

const updateBackstagePassQuality = (sell_in, quality) => {
  switch (true) {
    case sell_in <0:
      return 0;
    case sell_in <5:
      return enforceQualityBounds(quality +3)
    case sell_in<10:
      return enforceQualityBounds(quality +2)
    default:
      return enforceQualityBounds(quality +1)
  }
}

const updateConjuredQuality = (sell_in, quality) => {
  let newQuality = sell_in<0? quality -4 : quality -2;
  return enforceQualityBounds (newQuality);
}

const updateStandardQuality = (sell_in, quailty) => {
  let newQuality = sell_in<0? quailty -2 : quailty -1;
  return enforceQualityBounds (newQuality);
}

export function updateQuality(items){
  return items.map((e)=>{
    switch(e.name){
      case 'Aged Brie':
        return {...e, sell_in: e.sell_in -1, quality: updateBrieQuality(e.sell_in -1, e.quality)};
      case 'Sulfuras, Hand of Ragnaros':
        return {...e};
      case 'Backstage passes to a TAFKAL80ETC concert':
        return {...e, sell_in: e.sell_in -1, quality: updateBackstagePassQuality(e.sell_in -1, e.quality)};
      case 'Conjured Mana Cake':
        return {...e, sell_in: e.sell_in -1, quality: updateConjuredQuality(e.sell_in -1, e.quality)};
      default:
        return {...e, sell_in: e.sell_in -1, quality: updateStandardQuality(e.sell_in -1, e.quality)};
    }
  })
}