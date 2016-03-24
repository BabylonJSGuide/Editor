﻿module BABYLON.EDITOR {
    export class GeometriesMenuPlugin implements ICustomToolbarMenu {
        // Public members
        public menuID = "GEOMETRIES-MENU";

        // Private members
        private _core: EditorCore;

        private _createCubeID = "CREATE-CUBE";
        private _createSphereID = "CREATE-SPHERE";

        /**
        * Constructor
        * @param toolbar: the main toolbar instance
        */
        constructor(mainToolbar: MainToolbar) {
            var toolbar = mainToolbar.toolbar;
            this._core = mainToolbar.core;

            // Create menu
            var menu = toolbar.createMenu("menu", this.menuID, "Geometry", "icon-bounding-box");
            
            // Create items
            toolbar.createMenuItem(menu, "button", this._createCubeID, "Add Cube", "icon-box-mesh");
            toolbar.addBreak(menu);
            toolbar.createMenuItem(menu, "button", this._createSphereID, "Add Sphere", "icon-sphere-mesh");
            // Etc.
        }

        /**
        * Called when a menu item is selected by the user
        * Returns true if a menu of the plugin was selected, false if no one selected
        */
        public onMenuItemSelected(selected: string): void {
            // 
            switch (selected) {
                case this._createCubeID:
                    SceneFactory.AddBoxMesh(this._core);
                    break;
                case this._createSphereID:
                    SceneFactory.AddSphereMesh(this._core);
                    break;
                default: break;
            }
        }
    }

    // Finally, register the plugin using the plugin manager
    PluginManager.RegisterMainToolbarPlugin(GeometriesMenuPlugin);
}