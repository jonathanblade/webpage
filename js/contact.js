$(document).ready(function() { 

  $('#btn-contact').click(function() {

    Swal.mixin({
      title:                   'Новое сообщение',
      confirmButtonText:       '<strong>Далее</strong><i class="margin-left-xs fas fa-arrow-circle-right"></i>',
      progressSteps:           ['1', '2', '3'],
      buttonsStyling:          false,
      customClass: {
        confirmButton:         'btn btn-primary btn-right btn-font'
      }
    }).queue([
      {
        text:                  'Введите ваш email.',
        input:                 'email',
        inputPlaceholder:      'Email',
        validationMessage:     'Пожалуйста, введите валидный email.',
        showClass: {
          popup:               'animated fadeInDownBig faster'
        }
      },
      {
        text:                  'Введите тему сообщения.',
        input:                 'text',
        inputPlaceholder:      'Тема',
        inputValidator: function(value) {
          if (!value) {
            return             'Пожалуйста, введите тему сообщения.'
          }
        },
        showClass: {
          popup:               'none'
        }
      },
      {
        text:                  'Введите сообщение.',
        confirmButtonText:     '<strong>Отправить</strong><i class="margin-left-xs fas fa-check-circle"></i>',
        input:                 'textarea',
        inputPlaceholder:      'Сообщение',
        inputValidator: function(value) {
          if (!value) {
            return             'Пожалуйста, введите сообщение.'
          }
        },
        showClass: {
          popup:               'none'
        },
        preConfirm: function() {
          Swal.update({
            hideClass: {
              popup:           'animated fadeOutUpBig faster'
            }
          });
        }
      }
    ]).then(function(result) {
      if (result.value) {
        $.ajax({
          type:                'POST',
          url:                 'https://gipakop384.pythonanywhere.com',
          dataType:            'json',
          data: JSON.stringify({
            'email':           result.value[0],
            'subject':         result.value[1],
            'message':         result.value[2]
          }),
          contentType:         'application/json; charset=utf-8'
        }).done(function() {
          Swal.fire({
            toast:             true,
            position:          'center',
            title:             'Сообщение отправлено',
            icon:              'success',
            showConfirmButton: false,
            timer:             3000,
            timerProgressBar:  true,
            showClass: {
              popup:           'animated tada'
            },
            hideClass: {
              popup:           'animated zoomOut faster'
            },
            target:            '#menu'
          });
        }).fail(function() {
          Swal.fire({
            toast:             true,
            position:          'center',
            title:             'Сообщение не отправлено',
            icon:              'error',
            showConfirmButton: false,
            timer:             3000,
            timerProgressBar:  true,
            showClass: {
              popup:           'animated tada'
            },
            hideClass: {
              popup:           'animated zoomOut faster'
            },
            target:            '#menu'
          });
        });
      }
    });
  });
});