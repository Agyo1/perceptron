class Perceptron {
    constructor(num, learningRate = 0.00001) {
        this.num = num;
        this.learnc = learningRate;

        this.bias = 1;

        this.weights = [];
        for (let i = 0; i <= num; i++) {
            this.weights[i] = Math.random() * 2 - 1;
        }
    }
    activate(inputs) {
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        if (sum > 0) {
            return 1;
        } else {
            return 0;
        }
    }
    train(inputs, desired) {
        inputs.push(this.bias);
        let guess = this.activate(inputs);
        let error = desired - guess;
        if (error != 0) {
            for (let i = 0; i < inputs.length; i++) {
                this.weights[i] += this.learnc * error * inputs[i];
            }
        }
    }
}
