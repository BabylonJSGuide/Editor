declare module BABYLON.EDITOR {
    class ScenarioMakerMenu implements ICustomToolbarMenu {
        menuID: string;
        private _core;
        private _openScenarioMaker;
        /**
        * Constructor
        * @param mainToolbar: the main toolbar instance
        */
        constructor(mainToolbar: MainToolbar);
        onMenuItemSelected(selected: string): void;
    }
}
