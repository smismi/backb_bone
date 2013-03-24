
App.Views.Box = Backbone.View.extend({
    tagName: "div",
    className: "login_box",
//    template: '#login_box',
//    template: "<strong>123</strong>",
    template: "#login_box",
    form: "#login_form_template",


    initialize: function(){
        console.log("initialize");

        this.renderBox();
    },
    renderBox: function() {

        var template = _.template($(this.template).html());

        var loginForm = new App.Views.LoginForm();
        this.$el.html(template({
                _top: "top",
                _content: $(this.form).html(),
                _bottom: "bottom"

            }
        ));



        var template = _.template( this.template );
//        this.$el.html(template( this.model.toJSON() ));
            $("body").append(this.$el);

    },
    showBox: function() {
        this.show()
    }
});

App.Views.LoginForm = Backbone.View.extend({
    el: "#login_form_template",
    initialize: function(){
    },
    events: {
        "submit": "submit"
    },
    submit: function () {
        alert("submit");
    }
});

App.Views.ButtonShow = Backbone.View.extend({
    el : "#button_show",
    initialize: function(){
        console.log("button_initio")
    },
    events: {
        "click": "click"
    },
    click: function(){
//        App.Views.Box.showBox();
    }
})


