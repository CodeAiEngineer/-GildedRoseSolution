import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';


var days = 15;



describe('gildedRoseInventoryTest', () => {
  it('Once the sell by date has passed, Quality degrades twice as fast', () => {
    const gildedRose = new GildedRose([new Item("random", 3, 5)]);
    
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
      //expect(items[0].name).to.equal('fixme');
      if (i == 4) {
       expect(items[0].quality).to.equal(0);
      //expect(items[1].quality).to.equal(0);
      }
    }

  });

  it('The Quality of an item is never negative', () => {
  
    const gildedRose = new GildedRose([new Item("random", 1, 2)]);
  
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
      //expect(items[0].name).to.equal('fixme');
      if (i == 4) {
       expect(items[0].quality).to.greaterThan(-1);
      //expect(items[1].quality).to.equal(0);
      }
    }

  });


  it('Aged Brie" actually increases in Quality the older it gets', () => {
  
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 2)]);
  
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
      //expect(items[0].name).to.equal('fixme');
      if (i == 4) {
       expect(items[0].quality).to.equal(7);
      //expect(items[1].quality).to.equal(0);
      }
    }

  });

  it('The Quality of an item is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('randomitem', 0, 80)]);
    const items = gildedRose.updateQuality();
    //expect(items[0].name).to.equal('fixme');
    expect(items[0].quality).to.equal(50);
  });

  
  it('Sulfuras", being a legendary item, never has to be sold or decreases in Quality', () => {
  
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 2)]);
  
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
   
      if (i == 4) {
       expect(items[0].quality).to.greaterThan(2);
    
      }
    }

  });




  it('Sulfuras" is a legendary item and as such its Quality is 80 and it never alters', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", -1, 55)]);
    const items = gildedRose.updateQuality();
    //expect(items[0].name).to.equal('fixme');
    expect(items[0].quality).to.equal(80);

  });

});
