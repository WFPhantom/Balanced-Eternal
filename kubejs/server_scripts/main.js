// Visit the wiki for more info - https://kubejs.com/
RecipeViewerEvents.removeRecipes(event => {
    event.remove('minecraft:crafter'),
    event.remove('aquaculture:neptunium_helmet'),
    event.remove('aquaculture:neptunium_chestplate'),
    event.remove('aquaculture:neptunium_leggings'),
    event.remove('aquaculture:neptunium_boots')
    event.remove('aquaculture:neptunium_pickaxe')
    event.remove('aquaculture:neptunium_axe')
    event.remove('aquaculture:neptunium_shovel')
    event.remove('aquaculture:neptunium_sword')
    event.remove('aquaculture:neptunium_bow')  
    event.remove('aquaculture:neptunium_hoe')  
    event.remove('redstonepen:remote') 
    event.remove('redstonepen:basic_gauge')
    event.remove('minecraft:spyglass')
    event.remove('computercraft:computer_command')
    event.remove('ae2:meteorite_compass')
    event.remove('ae2:guide')
    event.remove('ae2:matter_cannon')
    event.remove('ae2:portable_item_cell_1k')
    event.remove('ae2:portable_item_cell_4k')
    event.remove('ae2:portable_item_cell_16k')
    event.remove('ae2:portable_item_cell_64k')
    event.remove('ae2:portable_item_cell_256k')
    event.remove('ae2:portable_fluid_cell_1k')
    event.remove('ae2:portable_fluid_cell_4k')
    event.remove('ae2:portable_fluid_cell_16k')
    event.remove('ae2:portable_fluid_cell_64k')
    event.remove('ae2:portable_fluid_cell_256k')
})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:crafter'}),
    event.remove({output: 'aquaculture:neptunium_helmet'}),
    event.remove({output: 'aquaculture:neptunium_chestplate'}),
    event.remove({output: 'aquaculture:neptunium_leggings'}),
    event.remove({output: 'aquaculture:neptunium_boots'})
    event.remove({output: 'aquaculture:neptunium_pickaxe'})
    event.remove({output: 'aquaculture:neptunium_axe'})
    event.remove({output: 'aquaculture:neptunium_shovel'})
    event.remove({output: 'aquaculture:neptunium_sword'})
    event.remove({output: 'aquaculture:neptunium_bow'})
    event.remove({output: 'aquaculture:neptunium_hoe'})
    event.remove({output: 'redstonepen:remote'})
    event.remove({output: 'redstonepen:basic_gauge'})
    event.remove({output: 'minecraft:spyglass'})
    event.remove({output: 'computercraft:computer_command'})
    event.remove({output: 'ae2:meteorite_compass'})
    event.remove({output: 'ae2:guide'})
    event.remove({output: 'ae2:matter_cannon'})
    event.remove({output: 'ae2:portable_item_cell_1k'})
    event.remove({output: 'ae2:portable_item_cell_4k'})
    event.remove({output: 'ae2:portable_item_cell_16k'})
    event.remove({output: 'ae2:portable_item_cell_64k'})
    event.remove({output: 'ae2:portable_item_cell_256k'})
    event.remove({output: 'ae2:portable_fluid_cell_1k'})
    event.remove({output: 'ae2:portable_fluid_cell_4k'})
    event.remove({output: 'ae2:portable_fluid_cell_16k'})
    event.remove({output: 'ae2:portable_fluid_cell_64k'})
    event.remove({output: 'ae2:portable_fluid_cell_256k'})
})


ServerEvents.tags("worldgen/biome", (event) => {
    event.get("ae2:has_meteorites").removeAll()
    // event.get("terralith:skylands_autumn").removeAll()
    // event.get("terralith:skylands_spring").removeAll()
    // event.get("terralith:skylands_summer").removeAll()
    // event.get("terralith:skylands_winter").removeAll()
  })