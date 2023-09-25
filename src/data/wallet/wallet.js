class Wallet {
    constructor() {
        this.total = 0;
    }

    getTotal() { return this.total; }

    sumCredits(val) { this.total = this.total + val }

    subCredits(val) { this.total = this.total - val }
}