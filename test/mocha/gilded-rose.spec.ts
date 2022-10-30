import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('gildedRoseInventoryTest', () => {
  it('The Quality of an item is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('randomitem', 0, 80)]);
    const items = gildedRose.updateQuality();
    //expect(items[0].name).to.equal('fixme');
    expect(items[0].quality).to.equal(50);
  });

  it('Sulfuras" is a legendary item and as such its Quality is 80 and it never alters', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", -1, 55)]);
    const items = gildedRose.updateQuality();
    //expect(items[0].name).to.equal('fixme');
    expect(items[0].quality).to.equal(80);


  });







});
