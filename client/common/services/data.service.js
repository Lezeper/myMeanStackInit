(function () {
  app.service('meanData', ['$http', 'authentication',
      function meanData($http, authentication) {
    
    var serverUrl = "/api";
    var auth = {
        headers: {
          Authorization: 'Bearer ' + authentication.getToken()
        }
    };

    /***** User *****/
    var getAllUsers = function () {
      return $http.get(serverUrl + '/user', auth);
    };

    var getUserById = function (id) {
      return $http.get(serverUrl + '/user/' + id, auth);
    };

    var createUser = function (newUser) {
      return $http.post(serverUrl + '/user', newUser);
    };

    var updateUser = function (updateUser) {
      return $http.put(serverUrl + '/user', updateUser, auth);
    };

    var deleteUser = function (id) {
      return $http.delete(serverUrl + '/user?id=' + id, auth);
    };

    /***** Log *****/
    var getAllLogs = function(){
      return $http.get(serverUrl + '/log', auth);
    }

    var getLogsByIp = function(ip){
      return $http.get(serverUrl + '/log?ip=' + ip, auth)
    }

    var getLogsByDate = function(date){
      return $http.get(serverUrl + '/log?date=' + date, auth);
    }

    var deleteAllLogs = function(){
      return $http.delete(serverUrl + '/log', auth);
    }

    /***** Settings *****/
    var getSettings = function(){
      return $http.get(serverUrl + '/settings', auth);
    }

    var doDBBackup = function(){
      return $http.get(serverUrl + '/settings/dbbu', auth);
    }

    var updateSettings = function(settings){
      return $http.put(serverUrl + '/settings', settings, auth);
    }

    var deleteSettings = function(){
      return $http.delete(serverUrl + '/settings', auth);
    }

    return {
      getAllUsers: getAllUsers,
      createUser: createUser,
      updateUser: updateUser,
      deleteUser: deleteUser,
      getUserById: getUserById,

      getSettings: getSettings,
      doDBBackup: doDBBackup,
      updateSettings: updateSettings,
      deleteSettings: deleteSettings,

      getAllLogs: getAllLogs,
      getLogsByIp: getLogsByIp,
      getLogsByDate: getLogsByDate,
      deleteAllLogs: deleteAllLogs,
    }
  }])
})();