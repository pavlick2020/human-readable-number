module.exports = function toReadable (number) {
        let zeroNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',  'nineteen'];
        let tenNinety = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        if(number < 20) return zeroNineteen[number];
        if(number >= 20 && number < 100) {
            if(number % 10 === 0) return tenNinety[Math.floor(number/10)];
            return tenNinety[Math.floor(number/10)] + ' ' + zeroNineteen[number % 10];
        }
        if(number >= 100 && number < 1000){
            if(number % 100 === 0) return zeroNineteen[Math.floor(number/100)] + ' hundred';
            if(number % 10 === 0) return zeroNineteen[Math.floor(number/100)] + ' hundred ' + tenNinety[(number % 100)/10];
            if(number % 100 < 20) return zeroNineteen[Math.floor(number/100)] + ' hundred ' + zeroNineteen[number%100];
            return zeroNineteen[Math.floor(number/100)] + ' hundred ' + tenNinety[Math.floor((number % 100)/10)] + ' ' + zeroNineteen[(number % 100) % 10]
        }
    }
    

