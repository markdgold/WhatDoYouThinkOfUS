var mongoose = require('mongoose');

var CountriesSchema = mongoose.Schema({
    title: String,
    id: String,
    color: String,
    customData: Number,
    groupId: Number,
	articles: [{}]
});

CountriesSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var returnJson = {

            "title": ret.title,
            "id": ret.id,
            "color": ret.color,
            "groupId": ret.groupId

			};
				console.log(returnJson);
        return returnJson;
    }
});








// db.insert([
//   {
//     title: 'Austria'
//   },
//   {
//     title: 'UK'
//   }
// ]);

 //var EuropeSchema = mongoose.Schema({
 //  areas: [{
 //         title: 'Austria',
 //         id: "AT",
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 2
 //       }, {
 //         title: 'Ireland',
 //         id: 'IE',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 1
 //       }, {
 //         title: 'Denmark',
 //         id: 'DK',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 1
 //       }, {
 //         title: 'Finland',
 //         id: 'FI',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 1
 //       }, {
 //         title: 'Sweden',
 //         id: 'SE',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 1
 //       }, {
 //         title: 'GreatBritain',
 //         id: 'GB',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 1
 //       }, {
 //         title: 'Italy',
 //         id: 'IT',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 3
 //       }, {
 //         title: 'France',
 //         id: 'FR',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 2
 //       }, {
 //         title: 'Spain',
 //         id: 'ES',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 3
 //       }, {
 //         title: 'Greece',
 //         id: 'GR',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 3
 //       }, {
 //         title: 'Germany',
 //         id: 'DE',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 2
 //       }, {
 //         title: 'Belgium',
 //         id: 'BE',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 2
 //       }, {
 //         title: 'Luxembourg',
 //         id: 'LU',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 2
 //       }, {
 //         title: 'Netherlands',
 //         id: 'NL',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 2
 //       }, {
 //         title: 'Portugal',
 //         id: 'PT',
 //         color: "#67b7dc",
 //         customData: Number,
 //         groupId: 3
 //       }, {
 //         title: 'Lithuania',
 //         id: 'LT',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 1
 //       }, {
 //         title: 'Latvia',
 //         id: 'LV',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 1
 //       }, {
 //         title: 'CzechRepublic' ,
 //         id: 'CZ',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 4
 //       }, {
 //         title: 'Slovakia',
 //         id: 'SK',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 4
 //       }, {
 //         title: 'Slovenia',
 //         id: 'SI',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 3
 //       }, {
 //         title: 'Estonia',
 //         id: 'EE',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 1
 //       }, {
 //         title: 'Hungary',
 //         id: 'HU',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 4
 //       }, {
 //         title: 'Cyprus',
 //         id: 'CY',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 3
 //       }, {
 //         title: 'Malta',
 //         id: 'MT',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 3
 //       }, {
 //         title: 'Poland',
 //         id: 'PL',
 //         color: "#ebdb8b",
 //         customData: Number,
 //         groupId: 4
 //       }, {
 //         title: 'Romania',
 //         id: 'RO',
 //         color: "#83c2ba",
 //         customData: Number,
 //         groupId: 4
 //       }, {
 //         title: 'Bulgaria',
 //         id: 'BG',
 //         color: "#83c2ba",
 //         customData: Number,
 //         groupId: 4
 //       }, {
 //         title: 'Croatia',
 //         id: 'HR',
 //         color: "#db8353",
 //         customData: Number,
 //         groupId: 3
 // }
// ]

//  });




module.exports = mongoose.model('Countries', CountriesSchema);


