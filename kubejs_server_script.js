onEvent('recipes', (event) => {
    event.shapeless(Item.of('minecraft:diamond_pickaxe',1),[
        'minecraft:iron_pickaxe'
    ]);
    event.shapeless(Item.of('minecraft:diamond_axe',1),[
        'minecraft:iron_axe'
    ]);
    event.shapeless(Item.of('minecraft:diamond_sword',1),[
        'minecraft:iron_sword'
    ]);
    event.shapeless(Item.of('minecraft:diamond_shovel',1),[
        'minecraft:iron_shovel'
    ]);
    event.shapeless(Item.of('minecraft:diamond_hoe',1),[
        'minecraft:iron_hoe'
    ]);
    event.shaped(Item.of('computercraft:wireless_modem_advanced',1), [
        'GGG',
        'GOG',
        'GGG'
    ],
    {
        G: 'minecraft:gold_ingot',
        O: 'minecraft:ender_pearl'
    })
});