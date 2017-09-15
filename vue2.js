var urlapi = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

var app = new Vue({
    el: "#main",
    data: {
          message: null,
          items:[
              {name: '地址',active: false},
              {name: '更新',active: true}
          ]
    },
    created: function () {
         this.getDate()  
    },
    methods: {
        getDate: function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET',urlapi)
            xhr.onload = function () {
                self.message = JSON.parse(xhr.responseText)
            }
            xhr.send()
        },
        clickEvent: function (index) {
            for(var i= 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
            this.items[index].active = true;
        }
    }

})