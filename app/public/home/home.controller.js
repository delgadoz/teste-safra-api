angular.module("app").controller("homeController", ["charactersService", "$state", homeController]);

function homeController(charactersService, $state) {
    const vm = this;
    vm.characters = [];
    vm.offset = 0;
    vm.limit = 20;
    vm.totalCharacters = 0;

    vm.search = () => {
        vm.offset = 0;
        vm.getCharacters(true);
    };

    vm.getCharacters = (reset) => {
        charactersService
            .getAllCharacters(vm.characterName, vm.offset)
            .then((response) => {
                vm.totalCharacters = response.data.data.total;
                if (reset) {
                    vm.characters = response.data.data.results;
                } else {
                    vm.characters = [...vm.characters, ...response.data.data.results];
                }

            })
            .catch((error) => {
                console.log(error);
            });
    };

    vm.verMais = () => {
        vm.offset += vm.limit;
        vm.getCharacters();
    };

    vm.seeDetails = (character) => {
        $state.go("details", { characterId: character.id });
    };

    vm.goProTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

}