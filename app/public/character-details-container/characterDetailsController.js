angular.module("app").controller("characterDetailsController", ["characterComicsService","characterSeriesService", "getCharacterNameByIdService", "$stateParams", characterDetailsController]);
function characterDetailsController(characterComicsService, characterSeriesService, getCharacterNameByIdService, $stateParams) {
    const vm = this;
    vm.characterComics = [];
    vm.offsetComics = 0;
    vm.totalCharacterComics = 0;
    
    vm.characterSeries = [];
    vm.offsetSeries = 0;
    vm.totalCharacterSeries = 0;

    vm.limit = 18;

    vm.characterId = $stateParams.characterId;
    vm.characterInfos = [];


    vm.getCharacterComics = (reset) => {
        characterComicsService
            .getAllCharacterComics(vm.characterId, vm.offsetComics)
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

    vm.getCharacterSeries = (reset) => {
        characterSeriesService
            .getAllCharacterSeries(vm.characterId, vm.offsetSeries)
            .then((response) => {
                vm.totalCharacterSeries = response.data.data.total;
                if (reset) {
                    vm.characterSeries = response.data.data.results;
                } else {
                    vm.characterSeries = [...vm.characterSeries, ...response.data.data.results];
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
        vm.offsetComics = 0;
        vm.offsetSeries = 0;
        vm.getCharacterComics(true);
        vm.getCharacterSeries(true);
    };

    vm.verMaisComics = () => {
        vm.offsetComics += vm.limit;
        vm.getCharacterComics();
    };

    vm.verMaisSeries = () => {
        vm.offsetSeries += vm.limit;
        vm.getCharacterSeries();
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