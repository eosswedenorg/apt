
// Alpine collapse component
export default () => ({
    show: false,
    trigger: {
        ['@click']() {
            this.show = ! this.show;
        },
        ['x-text']() {
            return this.show ? 'Hide' : 'Show';
        }
    },
    target: {
        ['x-show']() {
            return this.show;
        }
    }
})
