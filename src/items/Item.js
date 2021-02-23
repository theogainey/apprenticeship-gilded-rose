class Item {
  constructor(name, sell_in, quality, handler) {
    this.name = name;
    this.sell_in = sell_in
    this.quality = quality
    this.handleItem = handler
  }

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

export {Item}
