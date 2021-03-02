//TARR Made the GOBLIN Eat US! ::sadface::

function mutateItemQuality(currentQuality, amount = 1) {
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

function mutateItemSellIn(currentSellIn, amount = 1) {
  // is generally always decremented (by 1)
  return currentSellIn - amount;
}

export function updateQuality(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name === 'Sulfuras, Hand of Ragnaros') {
      break; 
    } else if (items[i].name === 'Aged Brie') {
      items[i].handleItem()
    } else if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
      items[i].handleItem()
    } else {
      items[i].handleItem()
    }
    // handles decrementing of sell in for all items except sulfuras
    items[i].sell_in = mutateItemSellIn(items[i].sell_in);
  }
}