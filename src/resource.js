var res = {
    texture_plist: "res/graphics/texture.plist",
    texture_png: "res/graphics/texture.png",
    bgWelcome_jpg: "res/graphics/bgWelcome.jpg",
    bgLayer_jpg: "res/graphics/bgLayer.jpg",
    font_fnt: "res/fonts/font.fnt",
    font_png: "res/fonts/font.png",
    eat_plist: "res/particles/eat.plist",
    texture_png: "res/particles/texture.png",
    mushroom_plist: "res/particles/mushroom.plist",
    coffee_plist: "res/particles/coffee.plist",
    wind_plist: "res/particles/wind.plist",
    wind_png: "res/particles/wind.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
