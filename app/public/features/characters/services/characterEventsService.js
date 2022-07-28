angular.module("app").service("characterEventsService", function ($http, env) {
    this.getAllCharacterEvents = (characterId, offset) => {

        const params = {
            apikey: "f80694a77436906b8f07421eda71fe9b",
            hash: "cd95392a05f259bcf84be8c0847f7851",
            offset,
            ts: 1,
        };

        return $http.get(`${env.apiUrl}/characters/${characterId}/events`,
            {
                params,
            });

    };
});