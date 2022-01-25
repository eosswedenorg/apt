
import lunr from 'lunr'

// Package Search using Lunr
export default lunr(function () {
    this.field('name');
    this.field('version');
    this.field('repo');
    this.field('component');

    package_data.forEach(function (pkg) {
        this.add(pkg);
    }, this);
})
