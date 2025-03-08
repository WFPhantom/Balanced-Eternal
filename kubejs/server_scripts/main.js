// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {
    // MINECRAFT
    event.remove({output: 'minecraft:crafter'}),
    // event.remove({input: 'minecraft:crafter'}),
    event.remove({output: 'minecraft:spyglass'}),

    // REDSTONE PEN
    event.remove({output: 'redstonepen:remote'}),
    event.remove({output: 'redstonepen:basic_gauge'}),

    // COMPUTERCRAFT
    event.remove({output: 'computercraft:computer_command'})
})