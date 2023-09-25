class Task {

    constructor(name, total, reward) {
        this.name = name;
        this.total = total;
        this.total_math = total;
        this.reward = reward;
    }

    getName() {
        return this.name;
    }

    getTotal() {
        return this.total;
    }

    getReward() {
        return this.reward;
    }

    quit() {
        var percent = this.total_math / this.total;
        var payout = percent * this.total;
        return payout;
    }

    do(val) {
        this.total_math = this.total_math - val;
    }

}

export default Task;