const { Action } = require('./Action.js');
const Parser = require('rss-parser');
const parser = new Parser();

var exports = module.exports = {};

class ReadFeedRSSAction extends Action {

    constructor(name, params) {
        super(name, params);
    }

    /**
     *
     * @returns {Promise<string>} Returns an output containing the title of the pages linked in params and 4 title of the articles in the page
     */
    async run() {
    	let check = {
        		output: '',
        		noInput: true
        };
        //TODO change for
        for(let i=0; i<this.params.length; i++){
            let param = this.params[i];
            //console.log("Parametro: " + param);
            await parser.parseURL(param).then(data => {
                //console.log("Notizie di " + data.title);
                check.output += 'Queste sono le notizie da: ' + data.title + '. <break time=\"1s\"/> ';

                let i = 0;
                data.items.forEach(item => {
                    if (i < 4) {
                        //console.log('NOTIZIA: ' + item.title);
                        check.output += item.title + '. <break time=\"1.5s\"/> ';
                        i++;
                    }
                });

                check.output += '. <break time=\"1.5s\"/> ';
            }, () => {
                check.output += "Non riesco a leggere questo feed.";
            });
        }
        return check;
    }
}

exports.ReadFeedRSSAction = ReadFeedRSSAction;