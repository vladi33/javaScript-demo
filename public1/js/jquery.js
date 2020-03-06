
$('.table tbody').on('click', '.btn', function() {
      var currow = $(this).closest('tr');
      var col1 = currow.find('td:eq(0)').text();
      var col2 = currow.find('td:eq(1)').text();
      var col3 = currow.find('td:eq(2)').text();
      var result = col1 + " " + col2 + " " + col3;
      alert(result);
  });




  let s  = col1;

  console.log(s);
  
const data = 
{
  "name": "vladi",
  "age": 18,
  "title": "Bulgaria"
}


  $.ajax({
    type: 'POST',
    url: "/",
    data: data,
    contentType: "application/json",
    success: function(data) {

      console.log("data");

    }

  });

