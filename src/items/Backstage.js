function backstagePassesHandler() {
  if (this.sell_in <= 0) {
    this.quality = this.mutateItemQuality(this.quality, -(this.quality));
  } else if (this.sell_in < 6) {
    this.quality = this.mutateItemQuality(this.quality, 3);
  } else if (this.sell_in < 11) {
    this.quality = this.mutateItemQuality(this.quality, 2);
  } else {
    this.quality = this.mutateItemQuality(this.quality);
  }
}

module.exports = { backstagePassesHandler };
