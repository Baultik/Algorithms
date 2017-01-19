
// Implement
//
//  [ ] Tree class
//  [ ] add node functionality
//  [ ] find node functionality
//  [ ] remove node functionality (extra credit)
//
function TreeNode(data) {
    this.children = [];
    this.data = data;

    this.add = function (node) {
        this.children.push(node);
        return this;
    };
    this.find = function (value) {
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].data === value) {
                return this.children[i];
            } else {
                var val = this.children[i].find(value);
                if (val) return val;
                continue;
            }
        }
        return null;
    };
    this.remove = function () {
        //recursively ?
    }
}

var root = new TreeNode(1);
root.add(new TreeNode(2).add(new TreeNode(4)).add(new TreeNode(5))).add(new TreeNode(3));
var node = root.find(5);
console.log(node);