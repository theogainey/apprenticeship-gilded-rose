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

function mutateItemQuality(currentQuality, amount = 1) {
  // quality can increase or decrease, if no amount is specified quality will increase by 1
  return currentQuality + amount;
}

function mutateItemSellIn(currentSellIn, amount = 1) {
  // is generally always decremented (by 1)
  return currentSellIn - amount;
}

export function updateQuality(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name === 'Sulfuras, Hand of Ragnaros') {
      break;
    } else if (items[i].name === 'Aged Brie') {
      if (items[i].quality < 50) {
        // items[i].quality = items[i].quality + 1
        items[i].quality = mutateItemQuality(items[i].quality);
        if (items[i].sell_in < 0) {
          // items[i].quality = items[i].quality + 1
          items[i].quality = mutateItemQuality(items[i].quality);
        }
      }
    } else if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality < 50) {
        items[i].quality = mutateItemQuality(items[i].quality);
        // items[i].quality = items[i].quality + 1
        if (items[i].sell_in < 11) {
          // items[i].quality = items[i].quality + 1
        items[i].quality = mutateItemQuality(items[i].quality);
        }
        if (items[i].sell_in < 6) {
          // items[i].quality = items[i].quality + 1
          items[i].quality = mutateItemQuality(items[i].quality);
        }
      }
      if (items[i].sell_in <= 0) {
        // items[i].quality = items[i].quality - items[i].quality
        items[i].quality = mutateItemQuality(items[i].quality, -(items[i].quality));

      }
    } else {
      // items[i].quality = items[i].quality - 1
      items[i].quality = mutateItemQuality(items[i].quality, -1);
      if (items[i].sell_in <= 0) {
        // items[i].quality = items[i].quality - 1
        items[i].quality = mutateItemQuality(items[i].quality, -1);
      }
    }
    // handles sell in for all items except sulfuras
    // items[i].sell_in = items[i].sell_in - 1;
    items[i].sell_in = mutateItemSellIn(items[i].sell_in);
  }
}