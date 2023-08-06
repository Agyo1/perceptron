This project is my attempt of following the W3 schools tutorials for perceptrons.
Follow that tutorial here - https://www.w3schools.com/ai/ai_perceptrons.asp

In this readme I will explain how perceptrons work and how it is able to classify points on a graph above and below a line.
In simple terms, a perceptron takes in a number of binary inputs (1s or 0s) multiplies those inputs by a predetermined weight, and produces a binary output (1 or 0).

In this program, a graph of 100 random points and a line with a random (linear) slope is plotted.
The end goal is to have the perceptron be able to classify whether a point is above or below the line with the random slope.
To do this we create a perceptron with 2 inputs and a learning rate.
The perceptron has 2 main functions, the activate function and the train function. The activate function takes all of the inputs (1s and 0s) and multiplies them by a weight (In this program the weight is selected randomly but in some cases it is best to set to specific numbers). The weight is there simply to determine how input an input is. A simple example of this can be a perceptron deciding whether or not to play a game. There are a number of inputs, is the game fun? Does the game take a lot of time? and each of these inputs has a weight. For example 0.7 and 0.3. The activate function fills in those inputs (Is the game fun ? Yes : 1) (Does it take a lot of time? No : 0) and multiplies each of those inputs by its weight 1 \* 0.7, 0 \* 0.3, and adds them up, 0.7 + 0. If that number is greater than a certain threshold (0.7 for example), the perceptron will return a value accordingly. In this case it will return yes (you should play the game).

i_1 \* w_1 --\
i_2 \* w_2 ---P---1
i_3 \* w_3 --/

The training function is responsible for giving the perceptron a list of points and whether or not those points are above or below the line. In this program the inputs are passed in as x and y coordinates. i.e a list of 2 seperate lists, one for x's and one for y's. The desired list is simply a long list of 1s and 0s. 1 if a point is over the line, 0 if not.
The train function starts out by pushing the bias to the inputs list. The bias is the final input into the perceptron and in this example it will simply say that a point is over the line if it is equal to the threshold (if (x == 0.7) {x = 1}). The perceptron then makes a guess whether or not a point is over the line by using the activate function. It also calculates if it made an error by subtracting its guess from the desired input. If the perceptron guessed the right input, the error should be 0. However, if it is not 0 the perceptron slightly increases the weight of that input, learning from its mistake. In the actual script where the perceptron is initialized, the train function is run 10,000 times to train the perceptron to know where the points are.
And that is pretty much it. Each time the page is loaded a new graph is shown and the perceptron is trained using the steps above. Eventually this can be made into a whole neural network but it is much easier to use a library like Tensorflow to do that.

https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.36077&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false
