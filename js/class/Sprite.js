class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    // image.onLoad leading to issues, not needed as of now
    // this.image.onLoad = () => {
    //   console.log("loaded");
    //   this.loaded = true;
    //   this.width = this.image.width / 11;
    //   this.height = this.image.height;
    // };
    this.width = this.image.width / 11;
    this.height = this.image.height;
    this.image.src = imageSrc;
    this.loaded = true;
  }
  draw() {
    if (!this.loaded) return;
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
