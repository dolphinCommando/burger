$(document).ready(function() {
  $('#burger-submit').on('click', function(event) {
    event.preventDefault();
    var input = $('#burger-name').val().trim();
    if (input === '' || input === null) {
      alert('Empty strings not accepted.');
    }
    else {
      var newData = {
        name: $('#burger-name').val().trim()
      };
      $.ajax('/api/burgers', {
        type: "POST",
        data: newData
      }).then(
        function() {
          location.reload();
        }
      );
    }
  });

  $('body').on('click', '.eat-burger', function(event) {
    var newData = {
      id: $(this).data('id')
    }
    $.ajax('/api/burgers/' + newData.id, {
      type: "PUT",
      data: newData
    }).then(
      function() {
        location.reload();
      }
    );
  });
});