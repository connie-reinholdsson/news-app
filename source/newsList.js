(function(exports) {
  function NewsList() {
    this.list = [];
  }

  NewsList.prototype.addHeadline = function(headlines) {
    // this.list.push(headline);
    this.list = headlines;
  };


  NewsList.prototype.getHeadline = function(index) {
    return this.list[index];
  };

  NewsList.prototype.getHeadlines = function() {
    var headlines = "";
    for(i = 0; i < this.list.length; i++) {
      headlines += this.list[i];
    }
    return headlines;
  };

  exports.NewsList = NewsList;
})(this);
