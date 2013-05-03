(function ($) {


    //инициализацичя плагина



    $.fn.xvalidate = function (options) {

        var validState = false;  // большой флаг состояние формы


        // дефолты поля и паттерны
        var defaults = {
            fields: null,
            pattern: {
                ru: "",
                en: "",
                num: {
                    cssClass: "num",
                    errorText: "тольк о цыфры пожалуйсто"
                },
                email: {
                    cssClass: "email",
                    errorText: "а тут нужен email"
                },
                empty: {
                    cssClass: "empty",
                    errorText: "должно быть заполнено"
                }
            }
        }

        // переопределяеи экстендя паттерны из вызова
        options.pattern = $.extend(defaults.pattern, options.pattern)

        // переопределяеи экстендя опции из вызова
        options = $.extend(defaults, options)


        console.log(options);

        var _form = $(this);
        var error = "error";


        // пробугаемся при ините - поля облагораживаем подсказками и прочей чепухой
        //ищем все поля которые учасствуют в валидации

        jQuery.each(options.fields, function (key, val) {

            _field = _form.find("input[name='" + key + "']")

            //если у поля несколько проверок
            valArray = val.split(",");

            //для каждогй из критериев своя подсказка
            jQuery.each(valArray, function (i, val) {
                var val = val.trim();

                //слазили в объект вытащищлии актуальный класс и текст сообщения
                var real_val = options.pattern[val];

                //повестли класс
                _field.addClass(real_val.cssClass);


                //создали подсказку
                var tooltip = $("<i class='error_text'/>").addClass(real_val.cssClass).html(real_val.errorText)
                tooltip.insertAfter(_field);

            /*TODO: можно сразу писать все поля-подсказки в объект для потом быстрого доступа*/

            })
        })


//время сабмита
        $(this).on("submit", function () {

            //по всем интересующим нас полям
            jQuery.each(options.fields, function (key, val) {

                //собрали в переменные DOM-объекты
                var _field = _form.find("input[name='" + key + "']");
                var _error_text = _field.parent().find("i.error_text");

                // сняли классы оштбок и убрали подсказки
                _field.removeClass(error);
                _error_text.hide();


                // разобрали строку с типами валидации по запятым
                valArray = val.split(",");

                //и для каждого
                jQuery.each(valArray, function (i, val) {
                    var val = val.trim();
                    var real_val = options.pattern[val]

                    // посмотрели что возвращает check
                    // check принимает [тип валидации, текущее значение поля]
                    if (!check(val, _field.val())) {

                        // если вернуло false
                        var _error_text0 = _field.parent().find("i.error_text." + real_val.cssClass + "");
                        _error_text0.show();


                        _field.addClass(error);

                        console.log("оп ошибочка")

                    };


                })


            })

            //пока не знаю зачем
            if (validState) {
                return;
            }

            // превент отправки формы
            return false;
        })


        // функция проверки - можно дописывать свои

        check = function (validator, value) {
            switch (validator) {
                case "empty" :

//                     var _emptyReg = /^\s*$/;
                    var _emptyReg = new RegExp("[0-9a-zа-я_]", 'i');
                    ;
                    if (!_emptyReg.test(value)) {
                        return false;
                    } else {
                        return true;
                    }
                    break;
                case "email" :
                    var _emailReg = new RegExp("[0-9a-z_]+@[0-9a-z_^.]+\\.[a-z]{2,3}", 'i');
                    if (!_emailReg.test(value)) {
                        return false;
                    } else {
                        return true;
                    }
                    break;
                case "num" :
                    var _emailReg = new RegExp("[0-9]", 'i');
                    if (!_emailReg.test(value)) {
                        return false;
                    } else {
                        return true;
                    }
                    break;
                default:
//                     alert(1);


            }
        }
    }

})(jQuery);