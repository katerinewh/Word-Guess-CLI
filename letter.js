function Letter(letter) {
    this.letter = letter.substring(1, 1),
        this.isGuessed = false,
        this.showLetter = function() {
            if (this.isGuessed) {
                return this.letter
            } else {
                return "_"
            }
        }, this.guessLetter = function(guess) {
            if (!this.isGuessed && this.letter === guess) {
                this.isGuessed = true;
            }
        }
}

module.exports = Letter;
