(function() {
   
  var openDialog = document.getElementById('openDialog');
  var openModalDialog = document.getElementById('openModalDialog');
  var dialogWindow = document.getElementById('dialogWindow');

  // Open dialog window normally
  openDialog.addEventListener('click', function () {
    dialogWindow.show();
  });

  // Open dialog window as a modal
  openModalDialog.addEventListener('click', function () {
    dialogWindow.showModal();
  })

})();
