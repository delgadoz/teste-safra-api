angular.module("app").service("getCharacterNameByIdService", function ($http, env) {
    this.getCharacterNameById = (characterId) => {

        const params = {
            apikey: "f80694a77436906b8f07421eda71fe9b",
            hash: "cd95392a05f259bcf84be8c0847f7851",
            ts: 1,
        };

        return $http.get(`${env.apiUrl}/characters/${characterId}`,
            {
                params,
            });

    };
});