(function(){
  const formulaire = document.getElementById("mon-formulaire");
  const list = document.getElementById("my-list");

  formulaire.addEventListener('submit', function(event){
    event.preventDefault();
    const task = document.getElementById("task");
  });

  const dbTask = firebase.database().ref('/tasks');
  dbTask.on('value', snap => list.innerHTML = snap.val());

 

})();