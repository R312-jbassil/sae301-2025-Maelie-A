/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716722970")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select3905394162",
    "maxSelect": 1,
    "name": "Couleurs_branches",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Jaune",
      "Marron",
      "Gris",
      "Blanc",
      "Rouge"
    ]
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2399611478",
    "maxSelect": 1,
    "name": "Couleurs_verres",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Marron",
      "Gris",
      "Blanc"
    ]
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select744084877",
    "maxSelect": 1,
    "name": "Couleurs_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Marron",
      "Gris",
      "Blanc"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716722970")

  // remove field
  collection.fields.removeById("select3905394162")

  // remove field
  collection.fields.removeById("select2399611478")

  // remove field
  collection.fields.removeById("select744084877")

  return app.save(collection)
})
