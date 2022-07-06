angular.module("app").service("charactersService", function ($http, env) {
    this.getAllCharacters = (character, offset) => {

        const params = {
            apikey: "f80694a77436906b8f07421eda71fe9b",
            hash: "cd95392a05f259bcf84be8c0847f7851",
            ts: 1,
            offset,
        };

        if (character != null && character.length != 0 && character != undefined) {
            params["nameStartsWith"] = character;
        }

        return $http.get(`${env.apiUrl}/characters`,
            {
                params,
            });

    };
});