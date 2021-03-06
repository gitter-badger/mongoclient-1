/**
 * Created by RSercan on 3.1.2016.
 */
Template.isCapped.executeQuery = function () {
    Template.browseCollection.initExecuteQuery();
    var connection = Connections.findOne({_id: Session.get(Template.strSessionConnection)});
    var selectedCollection = Session.get(Template.strSessionSelectedCollection);

    Meteor.call("isCapped", connection, selectedCollection, function (err, result) {
        if (!result.result) {
            result.result = false;
        }
        Template.renderAfterQueryExecution(err, result,"isCapped");
    });
};