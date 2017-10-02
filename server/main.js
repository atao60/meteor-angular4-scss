import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import XLSX from 'xlsx';

Meteor.startup(() => {

    if (Test.find().count() === 0) {
        var w = [
            { 'user': 'test', 'compteur': 0 },
        ];
        for (var i = 0; i < w.length; i++)
            Test.insert(w[i]);
    }

});

Meteor.methods({

    'testeMethod': function (param) {
        return "wrapped '" + param + "'";
    },

    'incrementCompteur': function (inc) {
        var inc = inc || 1;
        var test = Test.findOne();
        Test.update(
            {},
            { $set: { compteur: test.compteur + inc } },
            { multi: true },
            //function (error, number) {
            //	if (error) console.log ("erreurs :"+error);
            //	if (number) {test.number = number; console.log(test.number);}
            //}
        );
        return (test && test.number) ? test.number : 1;
    }

});
