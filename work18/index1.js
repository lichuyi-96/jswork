(function(){
    function PageList(options){
        for(var i in options){
            this[i] = options[i];
        }
        var obj = this;
        this.frist.onclick = function(){
            obj.page = 1;
            obj.onChange();
        };
        this.pre.onclick = function(){
            obj.page = (obj.maxPage>1)?(obj.page - 1):1;
            obj.onChange();
        };
        this.next.onclick = function(){
           obj.page= (obj.page >= obj.maxPage)?obj.maxPage:(obj.page + 1);
           obj.onChange();
        };
        this.last.onclick = function(){
            obj.page = obj.maxPage;
            obj.onChange();
        };
    }
    PageList.prototype.updateStatus = function () {
        this.frist.disabled = (this.page <= 1);
        this.prev.disabled = (this.page <= 1);
        this.next.disabled = (this.page >= this.maxPage);
        this.last.disabled = (this.page >= this.maxPage);
        this.pageNum.innerHTML = this.page;
    };

    function Comment(obj){
        this.obj = obj;
    }
    Comment.prototype.ajax = function (url,start,complete){
        
    }
})