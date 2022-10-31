export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
///MY ADDITION: Define Increase and reduction levels.(I didnt change item class :) )
var  qReduction = 1;
var  qIncrease = 1;
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }


  

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {      
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - qReduction
            //MY ADDITION: Quality reduction added for "conjured" materials.
            if (this.items[i].name.includes('Conjured') ==true) {
              this.items[i].quality = this.items[i].quality - qReduction
            }
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + qIncrease
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn <= 10) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + qIncrease
              }
            }
            if (this.items[i].sellIn <= 5) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + qIncrease
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - qReduction
                //MY ADDITION: Quality reduction added for "conjured" materials.
                if (this.items[i].name.includes('Conjured') ==true) {
                  this.items[i].quality = this.items[i].quality - qReduction
                }
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + qIncrease
          }
        }
      }
      
      //MY ADDITION: "Sulfuras" quality constraint added.
      if (this.items[i].name.includes('Sulfuras') ==true) {
        this.items[i].quality= 80}
      //MY ADDITION: Quality constraint(50) added.
      if ((this.items[i].name.includes('Sulfuras') ==false) && (this.items[i].quality > 50)) {
        this.items[i].quality= 50}  

          
    }
    


    return this.items;
  }
}

