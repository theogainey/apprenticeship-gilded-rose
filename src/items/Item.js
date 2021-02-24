/* eslint-disable camelcase */

class Item {
  constructor(name, sell_in, quality, handler) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
    this.handleItem = handler;
  }

  // eslint-disable-next-line class-methods-use-this
  mutateItemQuality(currentQuality, amount = 1) {
    /**
     * checks if adding the two values would cancel them out and returns 0 before adding
     * this sets the quality of backstage passes to 0 without needing to check if quality is 50+
     * otherwise ('Backstage passes to a TAFKAL80ETC concert', -1, 50) is not handled properly
     */
    if (-(currentQuality) === amount) {
      return 0;
    }
    // does not allow quality to be increased over 50
    if (currentQuality >= 50) {
      return currentQuality;
    }
    // quality can increase or decrease, if no amount is specified quality will increase by 1
    return currentQuality + amount;
  }
}
/*
* Update inventory
* @param {Item[]} items - an array of Items representing the inventory to be updated
* Example usage:

const items = [
  new Item('+5 Dexterity Vest', 10, 20, handlerFunction),
  new Item('Aged Brie', 2, 0, handlerFunction),
  new Item('Elixir of the Mongoose', 5, 7, handlerFunction),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80, handlerFunction),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20, handlerFunction),
  new Item('Conjured Mana Cake', 3, 6, handlerFunction),
];

updateQuality(items);
*/

// eslint-disable-next-line import/prefer-default-export
export { Item };
