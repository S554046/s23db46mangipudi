var express = require('express');
var router = express.Router();

class fish{
  constructor(fish_type, fish_name, fish_cost){
      this.fish_type=fish_type;
      this.fish_name=fish_name;
      this.fish_cost=fish_cost;
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  let f1= new fish('Bony','Moby',35);
  let f2= new fish('Jawless','Oscar',52);
  let f3= new fish('cartilaginous','Sykes',25);
res.render('fish', { title: 'Search Results fish',fish : [f1,f2,f3] });
});

module.exports = router;
