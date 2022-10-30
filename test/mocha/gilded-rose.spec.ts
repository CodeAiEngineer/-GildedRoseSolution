import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';


var days = 15;



describe('gildedRoseInventoryTest', () => {
  it('Once the sell by date has passed, Quality degrades twice as fast', () => {
    const gildedRose = new GildedRose([new Item("random", 3, 5)]);
    
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();

      if (i == 4) {
       expect(items[0].quality).to.equal(0);
   
      }
    }

  });

  it('The Quality of an item is never negative', () => {
  
    const gildedRose = new GildedRose([new Item("random", 1, 2)]);
  
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
     
      if (i == 4) {
       expect(items[0].quality).to.greaterThan(-1);
     
      }
    }

  });


  it('Aged Brie" actually increases in Quality the older it gets', () => {
  
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 2)]);
  
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
      
      if (i == 4) {
       expect(items[0].quality).to.equal(7);
   
      }
    }

  });

  it('The Quality of an item is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('randomitem', 0, 80)]);
    const items = gildedRose.updateQuality();
  
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


  it('Quality increases by 2 when there are 10 days or less', () => {
  
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 2)]);

    /*
        
           SELLin ---Quality---forLoopValue
           15         2          -
           14         3          0
           13         4          1
           12         5          2
           11         6          3
           10         7          4
           9          9          5
           8          11         6
           7          13         7
           6          15         8  
           5          17         9
           4          20         10
    */
  
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
   
      if (i == 6) {
       expect(items[0].quality).to.equal(11);
       
    
      }
    }


  });

  it('by 3 when there are 5 days or less', () => {
  
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 2)]);

    /*
        
           SELLin ---Quality---forLoopValue
           15         2          -
           14         3          0
           13         4          1
           12         5          2
           11         6          3
           10         7          4
           9          9          5
           8          11         6
           7          13         7
           6          15         8  
           5          17         9
           4          20         10
    */
  


    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
   
      if (i == 4) {
       expect(items[0].quality).to.equal(7);
       
    
      }
    }

  });





  ///////////////After signed a supplier of conjured items./////////////////////

  it('"Conjured" items degrade in Quality twice as fast as normal items', () => {
  
    const gildedRose = new GildedRose([new Item('Conjured', 15, 8)]);

  
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
   
      if (i == 2) {
       expect(items[0].quality).to.equal(2);
       
    
      }
    }


  });


  it('an item can never have its Quality increase above 50', () => {
  
    const gildedRose = new GildedRose([new Item('Aged Brie', 15, 48)]);

  
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
   
      if (i == 13) {
       expect(items[0].quality).to.equal(50);
       
    
      }
    }


  });






  it('Sulfuras" is a legendary item and as such its Quality is 80 and it never alters', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 12, 55)]);
    const items = gildedRose.updateQuality();
    
      
    for (var i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
   
      if (i == 13) {
        expect(items[0].quality).to.equal(80);
       
    
      }
    }
    

  });

});


