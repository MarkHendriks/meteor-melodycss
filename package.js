Package.describe({
    summary: "Melody: an extremely lightweight responsive CSS grid framework."
});

Package.on_use(function (api) {
    api.add_files(['css/melody.css'], 'client');
});