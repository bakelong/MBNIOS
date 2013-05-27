	var onSettings = function() {
        console.log("settings");
    };
 
    var onHelp = function() {
        console.log("help");
    };
 
    var optionsmenu = new OptionsMenu({
        id: "optionsmenu",
        items: [ 
            [ {
                label: "Settings",
                image: "menu/settings.png",
                action: onSettings
            }, 
            {
                label: "Help",
                image: "menu/help.png",
                action: onHelp
            } ]
        ]
    });