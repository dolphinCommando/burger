$(document).ready(function() {
  $('#burger-submit').on('click', function(event) {
    event.preventDefault();
    var input = $('#burger-name').val().trim();
    var newData = {
      name: $('#burger-name').val().trim()
    };
    $.ajax('/api/burgers', {
      type: "POST",
      data: newData,
      statusCode: {
        400: () => {
          $('#burger-wrong').css('display', 'block');
          $('#burger-name').css('border', '2px solid red');
        },
        200: () => {
          $('#burger-wrong').css('display', 'none');
          $('#burger-name').css('border', 'none');
        }
      }
    }).then(
      function() {
        location.reload();
      }
    );
  
  });

  $('body').on('click', '.eat-burger', function(event) {
    var newData = {
      id: $(this).data('id')
    }
    $.ajax('/api/burgers/' + newData.id, {
      type: "PUT",
      data: newData,
      statusCode: {
        404: () => {
          alert('Could not access data.')
        }
      }
    }).then(
      function() {
        location.reload();
      }
    );
  });
});