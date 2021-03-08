
  let input = {};
  input.isCheck = false;

  Object.defineProperty(input, 'isCheck', {
    set: function (newValue) {
      console.log(newValue);
    }
  });

  input.change = function (n, callback) {
    let oldValue = this[n];
    Object.defineProperty(this, n, {
      get: function () {
        return oldValue;
      },
      set: function (newValue) {
        callback(newValue, oldValue || undefined);
        oldValue = newValue;
      }
    })
  }

  var myInput = document.getElementById('javascript');
  var inputHere = document.getElementById('inputHere');


  myInput.addEventListener('click', function (e) {
    input.isCheck = myInput.checked
  })

  input.change('isCheck', function (newValue, oldValue) {
    if (newValue === true) {
      inputHere.innerHTML = '<input type="text" name ="" value="">';
    } else {
      inputHere.innerHTML = "";
    }
  })
