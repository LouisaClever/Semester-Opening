function setup() {
    canvas = createCanvas(windowWidth, windowHeight); // volle Fenstergröße

    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.scale = 0.0005;

    createBoundaries();  // Grenzen basierend auf aktueller Fenstergröße
    createItems();
    setupMouseInteraction();

    button = createButton('Bewegung aktivieren');
    button.style('font-size', '18px');
    button.style('padding', '10px 20px');
    button.style('background', '#ffffff');
    button.style('color', '#000000');
    button.style('border', 'none');
    button.style('border-radius', '5px');
    button.style('z-index', '1000');
    button.style('position', 'fixed');
    button.style('top', '50%');
    button.style('left', '50%');
    button.style('transform', 'translate(-50%, -50%)');
    button.mousePressed(requestAccess);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    // alte Grenzen entfernen
    World.remove(world, [ground, ceiling, leftWall, rightWall]);
    createBoundaries();  // neue Grenzen passend zur Fenstergröße
}
