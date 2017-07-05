var app = angular.module('todoApp', []);

var todoAppCtrlCode = ($scope) => {
  $scope.tarefas = [
    {numero: 12856, link: "http://detsed-rm-03/redmine/issues/12856"},
	// {numero: 12600, link: "http://detsed-rm-03/redmine/issues/12600"}
  ];

  adicionarFuncaoAoController("excluirTarefa", (key) => {
  	$scope.tarefas.pop(key)
  });

  adicionarFuncaoAoController("adicionarTarefa", (tarefa) => {
  	const URL_BASE = "http://detsed-rm-03/redmine/issues/";
  	tarefa.link =  URL_BASE + tarefa.numero;
    $scope.tarefas.push(angular.copy(tarefa));
  });

  function adicionarFuncaoAoController(functionName, functionCode){
	$scope[functionName] = functionCode;
  }
}

app.controller('todoAppCtrl', todoAppCtrlCode);


