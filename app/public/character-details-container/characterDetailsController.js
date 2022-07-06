angular.module("app").controller("characterDetailsController", ["characterComicsService", "getCharacterNameByIdService", "$stateParams", characterDetailsController]);
function characterDetailsController(characterComicsService, getCharacterNameByIdService, $stateParams) {
    const vm = this;
    vm.characterComics = [];
    vm.offset = 0;
    vm.limit = 18;
    vm.totalCharacterComics = 0;
    vm.characterId = $stateParams.characterId;
    vm.characterInfos = [];

    vm.getCharacterComics = (reset) => {
        characterComicsService
            .getAllCharacterComics(vm.characterId, vm.offset)
            .then((response) => {
                vm.totalCharacterComics = response.data.data.total;
                if (reset) {
                    vm.characterComics = response.data.data.results;
                } else {
                    vm.characterComics = [...vm.characterComics, ...response.data.data.results];
                }

            })
            .catch((error) => {
                console.log(error);
            });
    };

    vm.getCharacterName = () => {
        getCharacterNameByIdService
            .getCharacterNameById(vm.characterId)
            .then((response) => {
                vm.characterInfos = response.data.data.results[0];
            })
            .catch((error) => {
                console.log(error);
            });
    };

    vm.search = () => {
        vm.offset = 0;
        vm.getCharacterComics(true);
    };

    vm.verMais = () => {
        vm.offset += vm.limit;
        vm.getCharacterComics();
    };

    vm.goProTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    vm.getCharacterName();
    vm.search();

};