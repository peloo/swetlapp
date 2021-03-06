const { Action } = require('../actions/Action');
const { CustomMessageAction } = require('../actions/CustomMessageAction');
const { ReadFeedRSSAction } = require('../actions/ReadFeedRSSAction.js');
const { TwitterReadAction } = require('../actions/TwitterReadAction.js');
const { TwitterWriteAction } = require('../actions/TwitterWriteAction.js');
const { TwitterHomeAction } = require('../actions/TwitterHomeAction.js');
const { TVScheduleAction } = require('../actions/TVScheduleAction.js');
const { WeatherAction } = require('../actions/WeatherAction.js');
const { AddCardTrelloAction } = require('../actions/AddCardTrelloAction');
const { GetCardsFromBoardTrelloAction } = require('../actions/GetCardsFromBoardTrelloAction');

var exports = module.exports = {};

/**
 *
 * @param name {string}
 * @param params {JSON}
 * @returns {Action} Returns the appropriate Action depending on the the type of the action
 */
//TODO: serve il name nelle Actions???
function actionFactory(name, params) {
    switch (name) {
        case "custom_message":
            return new CustomMessageAction(name, params);
        case "read_feed":
            return new ReadFeedRSSAction(name, params);
        case "read_tweet":
            return new TwitterReadAction(name, params);
        case "write_tweet":
            return new TwitterWriteAction(name, params);
        case "home_tweet":
            return new TwitterHomeAction(name, params);
        case "tv_schedule":
            return new TVScheduleAction(name, params);
        case "weather":
        	return new WeatherAction(name, params);
        case "add_trello_cards":
            return new AddCardTrelloAction(name,params);
        case "read_trello_cards":
            return new GetCardsFromBoardTrelloAction(name,params);
        default :
            throw "Unknown action";
    }
}

exports.actionFactory = actionFactory;