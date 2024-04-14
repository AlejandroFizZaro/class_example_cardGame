class handToPlay{
    constructor( cards ){
        this.cards = cards;
    }
    
    color(){
        let cardColor = this.cards[0][1];
        let result = 'not clear';
        for(let card = 0; card<this.cards.length; card++){
            if( cardColor != this.cards[card][1]) {
                return 'not a Color';
            }
            result = 'Color';
       };
       return result;
    }

    validCards(){
        let result = false;
        for(let card = 0; card<this.cards.length; card++){
            if( !(1 <= this.cards[card][0] <= 10)){
                output = false;
                break;
            }
            result = true;
        }
        return result
    }

    points(){
        let total = 0;
        for(let card = 0; card<this.cards.length; card++){
            if( 1 <= this.cards[card][0] <= 10){
                total += this.cards[card][0];
            }
        }
        return total;
    }

    multiplier(){
        return (this.color = 'Color' && 4);
    }

    hand(){
        return (( this.validCards() && this.cards.length === 5  &&  this.color() === 'Color' )
        ? `The hand is a ${this.color()}, the total mount is ${this.points() * this.multiplier()}`
        : `The hand is ${this.color()}` );
    }
    
    get playHand(){
        return (this.hand());
    }
}

let myHand = new handToPlay 
(
    [
        [9,'red'],
        [8,'red'],
        [8,'red'],
        [8,'red'],
        [8,'red']
    ]
)

console.log(myHand.playHand);