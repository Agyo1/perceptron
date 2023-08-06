let numPoints = 100;
let data = [];

function createPlot(m, b, returnData = false) {
    let trace1 = {
        x: [],
        y: [],
        mode: 'markers',
        marker: {
            color: 'blue',
        },
    };
    let trace2 = {
        x: [],
        y: [],
        mode: 'markers',
        marker: {
            color: 'red',
        },
    };
    let trace3 = {
        x: [],
        y: [],
        mode: 'line',
    };

    for (let o = 0; o < numPoints; o++) {
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        if (y > x * m + b) {
            trace1.x.push(x);
            trace1.y.push(y);
        } else {
            trace2.x.push(x);
            trace2.y.push(y);
        }
    }

    for (let k = 0; k < numPoints; k++) {
        if (trace2.y[k] > trace2.x[k] * m + b) {
            trace2;
        }
    }

    for (let j = 0; j < numPoints; j++) {
        trace3.x.push(j);
    }

    for (let p = 0; p < numPoints; p++) {
        let num = m * p + b;
        trace3.y.push(num);
    }

    data = [trace1, trace2, trace3];

    var layout = {
        xaxis: { title: 'X-axis', range: [0, 100] },
        yaxis: { title: 'Y-axis', range: [0, 100] },
    };
    Plotly.newPlot('desired-chart-container', data, layout);
    if (returnData) {
        console.log(data);
        return data;
    }
}

function trainPtron(data, m, b) {
    let desired = [];
    console.log(data[0].y);
    for (let i = 0; i < numPoints; i++) {
        desired[i] = 0;
        if (data[0].y[i] > data[0].x[i] * m + b) {
            desired[i] = 1;
        }
    }
    console.log(desired);

    let ptron = new Perceptron(2);

    for (let j = 0; j <= 10000; j++) {
        for (let i = 0; i < numPoints; i++) {
            ptron.train([data[0].x[i], data[0].y[i]], desired[i]);
        }
    }

    let counter = 500;
    let errors = 0;

    let trace1 = {
        x: [],
        y: [],
        mode: 'markers',
        marker: {
            color: 'red',
        },
    };
    let trace2 = {
        x: [],
        y: [],
        mode: 'markers',
        marker: {
            color: 'blue',
        },
    };

    for (let j = 0; j < counter; j++) {
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        let guess = ptron.activate([x, y, ptron.bias]);
        if (guess == 0) {
            trace1.x.push(x);
            trace1.y.push(y);
        } else {
            trace2.x.push(x);
            trace2.y.push(y);
        }
        if ((y > x * m + b && guess == 0) || (y < x * m + b && guess == 1)) {
            errors++;
        }
    }
    var layout = {
        xaxis: { title: 'X-axis', range: [0, 100] },
        yaxis: { title: 'Y-axis', range: [0, 100] },
    };
    let data2 = [trace1, trace2, data[2]];
    Plotly.newPlot('guess-chart-container', data2, layout);
    document.getElementById('errors_output').innerHTML =
        errors + ' errors out of ' + counter;
}

window.onload = () => {
    var m = Math.random() * 10;
    var b = Math.random() * 50;

    data = createPlot(m, b, true);
    trainPtron(data, m, b);
    console.log('Page loaded!');
};
