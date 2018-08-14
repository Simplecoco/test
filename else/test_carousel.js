function Carousel (opt) {
    this.width = opt.width || 200;
    this.height = opt.height || 100;
    this.switchTIme = opt.switchTIme || 1000;
    this.selector = opt.selector;
    this.imgList = opt.imgList || ['a.img', 'b.img', 'c.img'];
    this.auto = opt.auto || true;
    this.infinite = opt.infinite || true;
    this.curPos = curPos || 0;
    this._isControl = true;
}

Carousel.prototype = {
    constructor: Carousel,
    init: function () {
        var self = this;
        self._createIt();
        self._addToNode();
        self._configIt();
    },
    _createIt: function() {
        // var con = '<div class="carouselCon">' +  + '</div>'
        var viewport = document.createElement('div');
        var imgsCon = document.createElement('ul');
        var fragment = document.createDocuemntFragment();
        self.imgList.forEach(function (item) {
            var li = document.createElement('li');
            // var img = document.
            li.innerHTML = `<img src=${item} class='carouselImg' />`;
            fragment.appendChild(li);
        });
        imgsCon.appendChild(fragment);
        viewport.appendChild(viewport);
        this._newDom = viewport;
    },
    _configIt: function () {
        var self = this;
        if (self.infinite) {
            
        }
        if (self.auto) {
            setInterval(self._move('left'), self.switchTIme);
        }
        else {
            
        }
    },
    _addToNode: function() {
        var self = this;
        document.getElementById(self.selector).appendChild(self._newDom);
        var carouselDom = docuemnt.getElementById(self.selector).getElementByClassName('xxx');
        var imgDom = ....;
    },
    _move: function (direction) {
        var self = this;
        if (!self._isControl) {
            return;
        }
        if (direction == 'left') {
            var curPos = (self.curPos - self.width)
            this.imgDom.style.tansform = curPos + 'px';
            return;
        }
        if (direction == 'right') {
            var curPos = (self.curPos + self.width)
            this.imgDom.style.tansform = curPos + 'px';
            return;
            
        } 
        return;
    },
}