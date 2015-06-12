import App from 'ember-proj/app';

export default App.AutoCompleteComponent = Ember.Component.extend({
    classNames: ['auto-complete'],
    createAutoSuggest: function() {
        var element = this.$('[data-role=input-holder]')[0];
        var auto=this.auto = completely(element, {
            fontSize: '1em'
        });
        var stocks=this.get('data').get('stocks');
        this.auto.options = stocks.mapBy('name');
        var superOnChange = this.auto.onChange;
        this.auto.onChange = function(txt) {
            superOnChange.apply(this, arguments);
        };
        this.$('input').focusout(function(){
            auto.hideDropDown();
        });
    }.on('didInsertElement'),
    actions: {
        search: function() {
            var text = this.$('[data-role=input-holder] input')[1].value;
            this.get('data').set('search',text);
            this.auto.hideDropDown();
        }
    }
});
