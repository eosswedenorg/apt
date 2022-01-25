
import pkg_idx from './pkg_idx'

// Alpine search component
export default () => ({
    show: false,
    query: "",
    getResults() {
        if (this.query.length < 1) {
            return [];
        }

        var results = pkg_idx.search(this.query).slice(0, 10);

        var list = results.map(function (item) {
            return package_data.filter(function (v, i, arr) {
                return v.id == item.ref;
            })[0];
        });

        this.open();
        return list;
    },
    toggle() {
        this.show = ! this.show;
    },
    open() {
        this.show = true;
    },
    close() {
        this.show = false;
    },
    isOpen() {
        return this.show;
    }
})
