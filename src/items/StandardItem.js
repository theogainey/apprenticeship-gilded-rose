function standardItemHandler() {
  if (this.sell_in <= 0) {
    this.quality = this.mutateItemQuality(this.quality, -2);
  } else {
    this.quality = this.mutateItemQuality(this.quality, -1);
  }
}

module.exports = { standardItemHandler };
