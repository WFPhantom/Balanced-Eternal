// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {
    // MINECRAFT
    event.remove({output: 'minecraft:crafter'}),
    // event.remove({input: 'minecraft:crafter'}),
    event.remove({output: 'minecraft:spyglass'}),

    // AQUACULTURE
    event.remove({output: 'aquaculture:neptunium_helmet'}),
    event.remove({output: 'aquaculture:neptunium_chestplate'}),
    event.remove({output: 'aquaculture:neptunium_leggings'}),
    event.remove({output: 'aquaculture:neptunium_boots'}),
    event.remove({output: 'aquaculture:neptunium_pickaxe'}),
    event.remove({output: 'aquaculture:neptunium_axe'}),
    event.remove({output: 'aquaculture:neptunium_shovel'}),
    event.remove({output: 'aquaculture:neptunium_sword'}),
    event.remove({output: 'aquaculture:neptunium_bow'}),
    event.remove({output: 'aquaculture:neptunium_hoe'}),
    event.remove({output: 'aquaculture:neptunes_bounty'}),

    // REDSTONE PEN
    event.remove({output: 'redstonepen:remote'}),
    event.remove({output: 'redstonepen:basic_gauge'}),

    // COMPUTERCRAFT
    event.remove({output: 'computercraft:computer_command'}),

    // AE2
    event.remove({output: 'ae2:meteorite_compass'}),
    event.remove({output: 'ae2:guide'}),
    event.remove({output: 'ae2:matter_cannon'}),
    event.remove({output: 'ae2:portable_item_cell_1k'}),
    event.remove({output: 'ae2:portable_item_cell_4k'}),
    event.remove({output: 'ae2:portable_item_cell_16k'}),
    event.remove({output: 'ae2:portable_item_cell_64k'}),
    event.remove({output: 'ae2:portable_item_cell_256k'}),
    event.remove({output: 'ae2:portable_fluid_cell_1k'}),
    event.remove({output: 'ae2:portable_fluid_cell_4k'}),
    event.remove({output: 'ae2:portable_fluid_cell_16k'}),
    event.remove({output: 'ae2:portable_fluid_cell_64k'}),
    event.remove({output: 'ae2:portable_fluid_cell_256k'})
})


ServerEvents.tags("worldgen/biome", (event) => {
    event.get("ae2:has_meteorites").removeAll()
  })