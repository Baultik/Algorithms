
// Implement
//
//  [ ] BinarySearchTree class (BST)
//  [ ] add node functionality
//  [ ] find node functionality
//  [ ] remove node functionality (extra credit)
//
function BinarySearchTreeNode(data) {
    this.left = null;
    this.right = null;
    this.data = data;

    this.add = function (node) {
        if (node.data < this.data) {
            this.left = node;
        } else {
            this.right = node;
        }

        return this;
    };
    this.find = function (value) {
        if (this.left && this.left.data === value) {
            console.log("found node",this.left);
            return this.left;
        } else if (this.right && this.right.data === value) {
            console.log("found node",this.right);
            return this.right;
        } else {
            var val = this.left ? this.left.find(value) : null;
            console.log("searching left node ",val);
            if (val) return val;

            val = this.right ? this.right.find(value) : null;
            console.log("searching right node ",val);
            if (val) return val;
        }

        return null;
    };
    this.remove = function () {
        //recursively ?
    }
}

var root = new BinarySearchTreeNode(4);
root.add(new BinarySearchTreeNode(2).add(new BinarySearchTreeNode(3)).add(new BinarySearchTreeNode(1))).add(new BinarySearchTreeNode(5));
debugger;
var node = root.find(2);
console.log(node);